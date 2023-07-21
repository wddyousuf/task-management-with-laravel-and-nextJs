<?php

namespace App\Http\Controllers\Api\V1;

use App\Events\UserRegistered;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    /**
     * @throws \Illuminate\Validation\ValidationException
     */
    public function register(Request $request)
    {
        $this->validate($request,[
           'name'=>'required',
           'email'=>'required|email|unique:users,email',
           'password'=>'required'
        ]);

        try {
            $data=User::create([
                'name'=>$request->name,
                'email'=>$request->email,
                'password'=>Hash::make($request->password),
            ]);
            event(new UserRegistered($data));
            $token=$data->createToken('tokens')->plainTextToken;
            if ($data){
                return response()->json([
                    'success' => true,
                    'message' => 'Registration Successful. Please log in to your account.',
                    'data' => [
                        'user'=>$data,
                        'token'=>$token
                    ]
                ], 200);
            }
        }catch (\Exception $e){
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
                'data' => null
            ], 500);
        }
        return response()->json([
            'success' => false,
            'message' => 'Registration Failed',
            'data' => null
        ], 500);

    }

    public function login(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        if ($user != null) {
            if (Hash::check($request->password, $user->password)) {
                return $this->loginSuccess($user);
            }else{
                return response()->json([
                    'success' => false,
                    'message' => 'Password Did not matched',
                    'data' => null
                ], 401);
            }
        }else{
            return response()->json([
                'success' => false,
                'message' => 'User Not Found',
                'data' => null
            ], 404);
        }
    }

    public function logout(Request $request)
    {
        $user = $request->user();
        $user->tokens()->where('id', $user->currentAccessToken()->id)->delete();
        return response()->json([
            'success' => true,
            'message' => 'Successfully Logged Out',
            'data' => null
        ], 200);
    }


    private function loginSuccess($user)
    {
        $token = $user->createToken('API Token')->plainTextToken;
        return response()->json([
            'success' => true,
            'message' => 'Successfully logged in',
            'data' => [
                'access_token' => $token,
                'token_type' => 'Bearer',
                'expires_at' => null,
                'user' => [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email
                ]
            ],

        ],200);
    }
}
