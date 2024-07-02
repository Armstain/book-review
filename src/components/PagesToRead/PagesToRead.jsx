import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { getStoredBooks } from '../../utility/localStorage.js';
import { useLoaderData } from 'react-router-dom';

const getPath = (x, y, width, height) => (
    `M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
     C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
     Z`
);

const TriangleBar = (props) => {
    const {
        fill, x, y, width, height,
    } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
;

const PagesToRead = () => {
    const charts = useLoaderData();
    const [data, setData] = useState([]);

    useEffect(() => {
        const storedBookBookIds = getStoredBooks();
        if (charts.length > 0) {
            const bookList = [];
            for (const bookId of storedBookBookIds) {
                const book = charts.find(book => book.bookId === bookId)
                if (book) {
                    bookList.push({
                        bookName: book.bookName,
                        totalPages: book.totalPages
                    });

                }
                setData(bookList);

            }
        }
    }, [])

    return (
        <div className='w-full h-full flex justify-center items-center mt-20'>
            <BarChart
                width={600}
                height={300}
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} />
            </BarChart>
        </div>
    );
};

export default PagesToRead;
