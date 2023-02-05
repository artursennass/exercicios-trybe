// Exercício 3
// Crie uma interface que represente uma pizza.

type TSlice = 4 | 6 | 8;

interface IPizza {
    flavor: string;
    slices: TSlice;
}

const calabresa: IPizza = {
    flavor: 'calabresa',
    slices: 8,
}

const marguerita: IPizza = {
    flavor: 'Marguerita',
    slices: 6
}

const nutella: IPizza = {
    flavor: 'Nutella',
    slices: 4,
}


// Exercício 4
// Vamos agora estender nossa interface Pizza com novos tipos de pizza.

type SaboresComuns = 'Calabresa' | 'Frango' | 'Pepperoni';

interface PizzaComum extends IPizza {
    flavor: SaboresComuns,
}

type SaboresVegetarianos = 'Marguerita' | 'Palmito' | 'Cogumelo';


interface PizzaVegetariana extends IPizza {
    flavor: SaboresVegetarianos,
}

type SaboresDoce = 'Nutella' | 'Goiabada com Queijo' | 'Marshmallow';

interface PizzaDoce extends IPizza {
    flavor: SaboresDoce,
    slices: 4
}

const calabresa2: PizzaComum = {
    flavor: 'Calabresa',
    slices: 8,
}

const cogumelo: PizzaVegetariana = {
    flavor: 'Cogumelo',
    slices: 6
}

const marshmallow: PizzaDoce = {
    flavor: 'Marshmallow',
    slices: 4,
}

const palmito: PizzaVegetariana = {
    flavor: 'Palmito',
    slices: 8,
}

const frango: PizzaComum = {
    flavor: 'Frango',
    slices: 6
}

const pepperoni: PizzaComum = {
    flavor: 'Pepperoni',
    slices: 4,
}