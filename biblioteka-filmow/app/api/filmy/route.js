import { NextResponse } from 'next/server';

let films = [
    { id: 1, title: 'Oppenheimer',       year: 2023, genre: 'Dramat'  },
    { id: 2, title: 'Dune: Czesc druga', year: 2024, genre: 'Sci-Fi'  },
    { id: 3, title: 'Past Lives',        year: 2023, genre: 'Romans'  },
    { id: 4, title: 'Poor Things',       year: 2023, genre: 'Komedia' },
]


export async function GET() {
    return NextResponse.json(films);
}