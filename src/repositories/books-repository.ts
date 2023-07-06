import { Book, CreateBook } from "../protocols/book";
import { CreateReview } from "../protocols/review";

import prisma from "../database/index";

export async function getBooks() {
  // const query = `SELECT * FROM books`;
  // const result = await connection.query<Book>(query);
  const result = await prisma.books.findMany();
  return result;
}

export async function getBook(id: number) {
  // const query = `SELECT * FROM books WHERE id = $1`;
  // const result = await connection.query<Book>(query, [id]);
  const result = await prisma.books.findFirst(
    {
      where:{
        id
      }
    }
  )
  return result;
}

export async function createBook(book: CreateBook) {
  // const { title, author, publisher, purchaseDate } = book;
  // const query = `
  //   INSERT INTO books (title, author, publisher, "purchaseDate")
  //   VALUES ($1, $2, $3, $4)`;

  // const result = await connection.query(query, [
  //   title, author, publisher, purchaseDate
  // ]);

  const result = await prisma.books.create(
    {
      data: book
    }
  )
  return result;
}

export async function reviewBook(id: number, bookReview: CreateReview) {
  // const { bookId, grade, review } = bookReview;
  // const query = `
  //   UPDATE books 
  //   SET
  //     grade = $1,
  //     review = $2,
  //     read = true 
  //   WHERE id = $3
  // `;

  // const result = await connection.query(query, [grade, review, bookId]);

  const result = await prisma.books.update({
    data: bookReview,
    where: {
      id
    }
  })

  return result;
}