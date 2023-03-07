<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;

    protected $primaryKey = 'id';

    protected $fillable = [
        'item_title',
        'item_content',
        'category'
    ];

    protected $guarded = [
        'id',
        'created_at',
        'updated_at'
    ];

    public function categories(){
        return $this->belongsTo('\App\Models\Category','category','id');
    }
}