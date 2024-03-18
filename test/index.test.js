require("./helpers.js");

const { expect } = require("chai");

// Your tests here
describe("filterByGenre", () => {
  it("should return an empty array if no books match the genre", () => {
    const genre = "Thriller";
    const books = [
      { title: "Book 1", author: "Author 1", genre: "Fantasy" },
      { title: "Book 2", author: "Author 2", genre: "Science Fiction" },
    ];
    const result = filterByGenre(genre, books);
    expect(result).to.be.an("array").that.is.empty;
  });

  it("should return an array of books matching the genre", () => {
    const genre = "Fantasy";
    const books = [
      { title: "Book 1", author: "Author 1", genre: "Fantasy" },
      { title: "Book 2", author: "Author 2", genre: "Science Fiction" },
      { title: "Book 3", author: "Author 3", genre: "Fantasy" },
    ];
    const result = filterByGenre(genre, books);
    expect(result).to.deep.equal([
      { title: "Book 1", author: "Author 1", genre: "Fantasy" },
      { title: "Book 3", author: "Author 3", genre: "Fantasy" },
    ]);
  });

  it("should handle an empty array of books", () => {
    const genre = "Fantasy";
    const books = [];
    const result = filterByGenre(genre, books);
    expect(result).to.be.an("array").that.is.empty;
  });

  it("should return a new array without modifying the original array", () => {
    const genre = "Fantasy";
    const books = [
      { title: "Book 1", author: "Author 1", genre: "Fantasy" },
      { title: "Book 2", author: "Author 2", genre: "Science Fiction" },
      { title: "Book 3", author: "Author 3", genre: "Fantasy" },
    ];
    const result = filterByGenre(genre, books);
    expect(result).to.deep.equal([
      { title: "Book 1", author: "Author 1", genre: "Fantasy" },
      { title: "Book 3", author: "Author 3", genre: "Fantasy" },
    ]);
    expect(result).to.not.equal(books);
  });
});