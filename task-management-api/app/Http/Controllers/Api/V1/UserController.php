<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function all_user()
    {
        $user=User::all();
        return response()->json([
            'success' => true,
            'message' => 'successful',
            'data' => $user
        ], 200);
    }
}
