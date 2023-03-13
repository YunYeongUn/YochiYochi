<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Board extends Model
{
    
    protected $primaryKey = 'id';

    protected $timestamps = false;

    protected $guarded = [
        'id', 
        'board_name',
    ];

    public function posts()
    {
        return $this->hasMany('\App\Models\Post', 'board_id','id');
    }
}