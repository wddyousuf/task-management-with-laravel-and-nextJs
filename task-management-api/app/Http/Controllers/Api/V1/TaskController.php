<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Jobs\SendMail;
use App\Models\Task;
use App\Models\TaskToUsers;
use App\Models\User;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data=Task::with(['assigned.user','assignedBy'])->get();
        return response()->json([
            'success' => true,
            'message' => 'successful',
            'data' => $data
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $this->validate($request,[
            'title'=>'required',
            'description'=>'sometimes',
            'deadline'=>'required'
        ]);

        try {
            $data=Task::create([
                'title'=>$request->title,
                'description'=>$request->description,
                'deadline'=>$request->deadline,
                'assigned_by'=>auth()->user()->id,
            ]);
            if ($data){
                return response()->json([
                    'success' => true,
                    'message' => 'Task created successfully',
                    'data' => $data
                ], 200);
            }
        }catch (\Exception $e){
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
                'data' => null
            ], $e->getCode());
        }
        return response()->json([
            'success' => false,
            'message' => 'Task creation Failed',
            'data' => null
        ], 500);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $this->validate($request,[
            'title'=>'required',
            'description'=>'sometimes',
            'deadline'=>'required'
        ]);

        try {
            $data=Task::where('id',$id)->update([
                'title'=>$request->title,
                'description'=>$request->description,
                'deadline'=>$request->deadline
            ]);
            if ($data){
                return response()->json([
                    'success' => true,
                    'message' => 'Task Updated successfully',
                    'data' => $data
                ], 200);
            }
        }catch (\Exception $e){
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
                'data' => null
            ], $e->getCode());
        }
        return response()->json([
            'success' => false,
            'message' => 'Task update Failed',
            'data' => null
        ], 500);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $data=Task::where('id',$id)->delete();
            if ($data){
                return response()->json([
                    'success' => true,
                    'message' => 'Task Deleted successfully',
                    'data' => $data
                ], 200);
            }
        }catch (\Exception $e){
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
                'data' => null
            ], $e->getCode());
        }
        return response()->json([
            'success' => false,
            'message' => 'Task delete Failed',
            'data' => null
        ], 500);
    }

    public function task_assign(Request $request)
    {
        $user=User::find($request->assigned_to);
        if ($user == null){
            return response()->json([
                'success' => false,
                'message' => 'No User Found',
                'data' => null
            ], 500);
        }
        $task=Task::find($request->task_id);
        if ($task == null){
            return response()->json([
                'success' => false,
                'message' => 'No Task Found',
                'data' => null
            ], 500);
        }
        try {
            $data=TaskToUsers::updateOrCreate([
                'assigned_to'=>$request->assigned_to,
                'task_id'=>$request->task_id,
            ],[]);
            if ($data){
                $mail =(new SendMail($user,$task));
                dispatch($mail);
                return response()->json([
                    'success' => true,
                    'message' => 'Task Assign successful',
                    'data' => $data
                ], 200);
            }
        }catch (\Exception $e){
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
                'data' => null
            ], $e->getCode());
        }
    }

}
