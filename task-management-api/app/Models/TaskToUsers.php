<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TaskToUsers extends Model
{
    use HasFactory;
    protected $guarded=[];

    public function user()
    {
        return $this->hasOne(User::class,'id','assigned_to');
    }
}
