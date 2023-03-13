<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BoardsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $board = [
            'board_name' => 'normal'
        ];
        \Illuminate\Support\Facades\DB::table('boards')->insert($board);

        $board = [
            'board_name' => 'qna'
        ];
        \Illuminate\Support\Facades\DB::table('boards')->insert($board);
    }
}
