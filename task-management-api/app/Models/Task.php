<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;
    protected $guarded=[];

    public function assigned()
    {
        return $this->hasMany(TaskToUsers::class);
    }
    public function assignedBy()
    {
        return $this->hasOne(User::class,'id','assigned_by');
    }
}
