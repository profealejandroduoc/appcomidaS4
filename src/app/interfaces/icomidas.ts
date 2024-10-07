export interface Categorias {
  categories: Categoria[];
}

export interface Categoria {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export interface Recetas {
  meals: Receta[];
}

export interface Receta  {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}
