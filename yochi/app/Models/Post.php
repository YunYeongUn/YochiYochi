<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{
    use HasFactory, SoftDeletes;

    
    protected $primaryKey = 'id';

    protected $fillable = [
        'post_title',
        'post_content',
        'answer', 
        'writer',
        'board_id',
        'attachment'
    ];

    protected $guarded = [
        'id',
        'post_password',
        'created_at',
        'updated_at',
    ];

    public function users()
    {
        return $this->belongsTo('\App\Models\User', 'writer', 'id');
    }

    public function boards()
    {
        return $this->belongsTo('\App\Models\Board', 'board_id','id');
    }

    public function comments()
    {
        return $this->hasMany('\App\Models\Comment', 'post_id','id');
    }
}