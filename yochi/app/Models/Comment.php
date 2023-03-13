<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Comment extends Model
{
    use HasFactory, SoftDeletes;

    

    protected $primaryKey = 'id';

    protected $fillable = [
        'comment',
        'post_id',
        'writer',
    ];

    protected $guarded = [
        'id',
        'created_at',
        'updated_at',
    ];

    public function users()
    {
        return $this->belongsTo('\App\Models\User', 'writer', 'id');
    }

    public function posts()
    {
        return $this->belongsTo('\App\Models\Post', 'post_id','id');
    }
}