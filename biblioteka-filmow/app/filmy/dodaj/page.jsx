'use client';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import {useRouter} from "next/navigation";


const validationSchema = Yup.object({
    title: Yup.string().min(2, "Min 2 characters"),
    year: Yup.number().min(1888, 'Min year 1888').max(2030, 'Max year 2030'),
    genre: Yup.string().required('Genre is required'),
});

export default function FormikForm() {
    const router = useRouter();

    const formik = useFormik({
        initialValues: { title: '', year: '', genre: '' },
        validationSchema,
        onSubmit: (values) => {
            fetch("/api/filmy", {
                method: "POST",
                body: JSON.stringify(values),
            }).then(response => {
                router.push("/filmy");
            })

        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input
                    id="title"
                    type="text"
                    {...formik.getFieldProps('title')}
                    placeholder="title"
                    aria-invalid={!!(formik.touched.title && formik.errors.title)}
                    aria-describedby="title-error"
                />
                {formik.touched.title && formik.errors.title && (
                    <span id="title-error" role="alert">{formik.errors.title}</span>
                )}
            </div>

            <div>
                <input
                    id="year"
                    type="number"
                    {...formik.getFieldProps('year')}
                    placeholder="year"
                    aria-invalid={!!(formik.touched.year && formik.errors.year)}
                    aria-describedby="year-error"
                />
                {formik.touched.year && formik.errors.year && (
                    <span id="year-error" role="alert">{formik.errors.year}</span>
                )}
            </div>

            <div>
                <input
                    id="genre"
                    type="text"
                    {...formik.getFieldProps('genre')}
                    placeholder="genre"
                    aria-invalid={!!(formik.touched.genre && formik.errors.genre)}
                    aria-describedby="genre-error"
                />
                {formik.touched.genre && formik.errors.genre && (
                    <span id="genre-error" role="alert">{formik.errors.genre}</span>
                )}
            </div>

            <button type="submit" disabled={formik.isSubmitting}>Submit</button>
        </form>
    );
}