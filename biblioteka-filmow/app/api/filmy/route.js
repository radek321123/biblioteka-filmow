import { NextResponse } from 'next/server';
import * as z from "zod";


let films = [
    { id: 1, title: 'Oppenheimer',       year: 2023, genre: 'Dramat'  },
    { id: 2, title: 'Dune: Czesc druga', year: 2024, genre: 'Sci-Fi'  },
    { id: 3, title: 'Past Lives',        year: 2023, genre: 'Romans'  },
    { id: 4, title: 'Poor Things',       year: 2023, genre: 'Komedia' },
]


export async function GET() {
    return NextResponse.json(films);
}

export async function POST(request) {

    const data = await request.json();

    const validation = movieSchema.safeParse(data);
    if (!validation.success) {
        return NextResponse.json("", {
            status: 400,
            body: JSON.stringify(validation) });
    }
    const newFilm = { id: Date.now(), ...data };
    films.push(newFilm);
    return NextResponse.json(newFilm, { status: 201 });
}

export const movieSchema = z.object({
    title: z.string().min(2, "Title must be at least 2 letters"),

    year: z
        .number()
        .min(1888, "Year must be after 1888")
        .max(2030, "Year must be before 2030"),

    genre: z.string().min(1, "Genre is required"),
});