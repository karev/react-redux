<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Recipe;

class RecipeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function index(Request $request) {
    	$recipes = Recipe::all();
    	return $recipes;
    }

    public function store(Request $request) {
    	$title = $request->json()->get('title');

    	try {
    		$recipe = Recipe::create(['title' => $title]);
    		return json_encode(['code' => 200, 'data' => $recipe, 'error' => null]);
    	} catch (Exception $e) {
    		return json_encode(['code' => 300, 'data' => null, 'error' => $e->getMessage()]);
    	}
    }
}
