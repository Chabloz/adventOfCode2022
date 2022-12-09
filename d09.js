const input = `L 2\nU 1\nL 2\nR 1\nL 1\nR 2\nU 1\nR 1\nU 1\nD 1\nL 2\nU 1\nL 1\nR 1\nL 1\nU 1\nL 1\nU 2\nD 1\nU 2\nL 1\nU 2\nR 1\nD 1\nU 2\nL 1\nU 2\nD 2\nR 1\nD 1\nL 2\nR 2\nL 1\nD 2\nR 2\nU 1\nD 2\nU 1\nR 2\nD 2\nL 2\nR 1\nD 1\nU 2\nD 1\nL 1\nR 2\nU 1\nD 1\nL 1\nU 2\nR 1\nL 2\nR 1\nU 2\nD 2\nL 2\nD 1\nU 2\nL 2\nR 2\nL 2\nD 2\nL 2\nU 1\nR 1\nL 2\nR 1\nU 2\nL 1\nD 2\nL 1\nR 2\nD 1\nR 1\nL 1\nR 2\nU 2\nL 1\nU 2\nD 1\nL 1\nU 1\nD 2\nU 1\nD 1\nR 2\nU 2\nR 1\nL 1\nR 2\nL 2\nR 1\nL 2\nD 2\nR 2\nL 1\nU 2\nL 1\nR 2\nL 1\nU 2\nD 2\nL 2\nD 2\nR 1\nU 2\nL 2\nD 2\nU 1\nD 2\nR 1\nD 1\nR 2\nL 2\nR 1\nL 3\nR 1\nD 2\nL 1\nD 2\nL 2\nU 1\nD 1\nR 2\nL 2\nR 1\nD 1\nU 1\nR 1\nD 1\nL 2\nR 1\nU 2\nR 2\nD 2\nR 2\nD 3\nU 1\nL 3\nR 2\nL 2\nR 3\nU 2\nD 2\nU 2\nL 2\nU 3\nD 1\nL 1\nD 2\nU 3\nL 3\nD 2\nR 1\nU 1\nL 2\nD 2\nR 2\nU 3\nL 2\nU 2\nD 2\nR 2\nL 1\nD 1\nL 2\nD 1\nL 3\nU 2\nL 1\nU 2\nR 3\nD 2\nU 2\nR 3\nU 2\nL 3\nD 1\nU 1\nD 1\nU 2\nD 1\nL 3\nU 2\nD 1\nR 2\nU 2\nD 1\nR 1\nU 3\nL 2\nD 2\nL 3\nD 3\nL 2\nD 2\nL 2\nD 3\nR 3\nU 2\nL 3\nR 3\nL 2\nR 1\nL 2\nU 3\nR 1\nL 3\nD 3\nR 1\nL 1\nD 1\nR 2\nU 3\nL 3\nD 2\nR 3\nD 3\nL 3\nU 3\nR 2\nL 1\nR 1\nU 2\nL 1\nU 2\nD 2\nL 4\nU 1\nL 1\nR 3\nD 1\nU 3\nD 4\nU 3\nL 4\nD 2\nR 1\nD 1\nL 3\nU 3\nL 1\nR 4\nU 4\nR 4\nU 3\nL 4\nU 3\nL 2\nR 2\nD 2\nU 4\nL 2\nR 3\nL 1\nR 4\nU 3\nD 1\nL 4\nU 1\nL 1\nU 4\nR 3\nU 1\nD 4\nU 1\nD 2\nL 1\nU 2\nR 4\nL 3\nR 2\nD 2\nU 3\nD 2\nU 1\nD 3\nU 1\nR 3\nL 3\nU 2\nD 4\nU 1\nL 2\nR 1\nL 4\nR 2\nD 3\nL 1\nD 1\nU 2\nL 4\nU 4\nL 3\nR 2\nL 2\nD 1\nU 4\nL 1\nR 1\nU 3\nL 3\nD 4\nR 2\nL 1\nR 4\nD 1\nL 2\nD 1\nU 2\nL 3\nU 4\nL 1\nR 3\nL 2\nU 1\nL 3\nU 2\nD 3\nL 4\nD 3\nL 1\nR 4\nD 1\nL 4\nR 4\nU 1\nR 2\nL 3\nD 1\nR 4\nU 1\nL 1\nD 3\nL 3\nU 2\nL 1\nU 4\nD 4\nU 2\nD 3\nR 2\nL 2\nD 1\nR 2\nL 1\nD 2\nU 2\nD 4\nU 3\nR 2\nL 4\nR 3\nD 1\nU 5\nL 5\nR 2\nD 3\nL 5\nD 5\nU 2\nR 3\nL 2\nR 4\nL 1\nU 4\nR 5\nD 5\nU 4\nD 2\nL 4\nR 5\nD 4\nL 5\nU 2\nL 1\nD 2\nR 2\nD 1\nR 3\nU 3\nR 1\nL 1\nR 5\nL 2\nR 1\nL 2\nU 5\nR 5\nD 4\nL 2\nD 4\nR 4\nU 4\nD 3\nU 3\nD 1\nR 4\nD 1\nU 3\nL 2\nU 2\nR 1\nD 1\nR 4\nU 1\nR 5\nL 3\nD 4\nL 2\nD 4\nL 2\nD 4\nU 3\nD 4\nR 3\nU 1\nL 3\nU 3\nR 5\nL 1\nU 4\nR 2\nL 5\nU 3\nD 3\nU 3\nD 2\nR 5\nU 5\nR 2\nU 5\nL 5\nD 4\nU 2\nL 2\nU 3\nD 2\nL 3\nD 2\nU 5\nL 3\nR 3\nU 3\nD 5\nR 3\nU 6\nD 4\nL 2\nD 4\nL 4\nU 6\nR 4\nD 4\nU 5\nD 6\nU 4\nD 5\nR 6\nD 2\nR 5\nD 5\nL 2\nR 5\nU 1\nL 6\nD 4\nL 6\nU 3\nD 6\nR 6\nL 3\nU 5\nL 3\nU 6\nD 1\nR 4\nL 1\nD 2\nR 2\nU 4\nR 4\nD 5\nL 5\nD 6\nR 5\nD 1\nL 3\nU 6\nD 3\nR 6\nD 1\nL 6\nU 1\nR 3\nU 1\nR 4\nU 5\nL 1\nR 1\nU 3\nL 6\nD 1\nL 3\nR 2\nD 5\nU 2\nL 6\nU 6\nL 1\nU 6\nL 3\nU 1\nD 2\nL 6\nR 6\nD 4\nR 3\nU 3\nR 4\nU 5\nL 3\nD 5\nR 3\nL 5\nU 1\nR 4\nL 1\nD 4\nU 6\nL 4\nD 6\nU 4\nL 6\nU 3\nR 6\nL 2\nU 5\nL 3\nD 1\nU 2\nD 4\nU 2\nL 2\nU 1\nL 1\nU 5\nR 1\nU 3\nR 5\nL 1\nR 3\nL 2\nD 1\nR 2\nD 3\nU 4\nD 3\nU 4\nD 2\nR 5\nU 1\nR 2\nD 3\nR 2\nU 4\nD 4\nR 4\nU 5\nD 5\nU 1\nD 2\nL 2\nR 6\nU 5\nD 1\nR 2\nL 1\nU 4\nD 7\nU 4\nR 3\nU 7\nL 2\nR 3\nL 4\nD 4\nU 5\nR 2\nL 5\nR 3\nU 7\nL 2\nD 5\nU 2\nD 4\nL 7\nR 7\nU 1\nD 6\nU 4\nL 6\nR 4\nD 4\nU 1\nD 2\nR 1\nL 2\nU 4\nR 4\nU 3\nD 2\nU 5\nR 4\nU 5\nD 7\nR 4\nU 3\nL 3\nD 4\nL 1\nR 5\nL 5\nR 5\nU 1\nR 6\nD 4\nU 6\nR 5\nD 5\nL 4\nR 3\nU 3\nL 5\nR 1\nL 1\nD 6\nL 3\nD 1\nU 3\nD 7\nL 1\nR 5\nD 4\nL 7\nR 3\nD 7\nL 5\nD 2\nR 2\nU 4\nD 3\nU 4\nD 6\nR 2\nL 2\nD 6\nU 7\nD 6\nU 3\nD 3\nR 3\nL 7\nR 7\nU 3\nR 8\nU 6\nR 5\nD 2\nL 4\nU 3\nL 4\nD 4\nR 4\nU 8\nD 4\nR 3\nD 5\nL 4\nD 2\nU 3\nD 4\nR 1\nU 3\nR 5\nD 4\nR 7\nD 5\nL 4\nU 2\nR 5\nD 4\nU 8\nD 4\nL 8\nU 6\nL 3\nR 3\nD 8\nL 2\nD 6\nR 3\nU 8\nD 8\nU 5\nD 1\nL 1\nU 7\nD 5\nU 7\nR 5\nU 2\nL 1\nD 7\nL 3\nD 6\nL 2\nR 6\nL 1\nR 8\nL 2\nU 6\nL 2\nD 7\nL 5\nU 8\nD 1\nU 4\nD 8\nU 5\nL 8\nR 4\nD 6\nU 7\nL 6\nU 1\nR 2\nD 3\nR 5\nD 7\nL 5\nR 1\nL 5\nD 4\nR 3\nD 7\nR 2\nD 7\nU 8\nR 7\nL 7\nD 2\nR 7\nU 6\nR 1\nU 1\nR 8\nL 2\nD 8\nL 7\nD 3\nL 1\nR 1\nD 7\nR 2\nL 3\nD 8\nL 2\nU 5\nD 5\nR 1\nD 4\nU 2\nD 5\nL 1\nD 1\nR 5\nD 8\nU 2\nD 7\nU 3\nL 9\nD 1\nU 2\nR 8\nU 5\nD 3\nU 8\nR 6\nL 5\nU 3\nL 9\nD 1\nR 7\nU 1\nD 4\nR 6\nD 7\nL 8\nR 5\nU 4\nL 5\nD 2\nR 4\nL 9\nD 1\nU 5\nR 1\nD 4\nR 7\nU 8\nR 3\nU 4\nL 9\nD 9\nR 6\nL 2\nD 7\nU 3\nL 6\nR 5\nU 1\nR 1\nD 6\nL 9\nU 2\nD 4\nL 3\nD 7\nL 5\nR 7\nL 4\nR 7\nL 9\nU 8\nR 6\nL 1\nU 7\nD 6\nR 2\nL 7\nD 7\nR 4\nU 5\nR 1\nL 9\nR 2\nD 2\nU 3\nR 8\nU 6\nL 8\nD 3\nL 7\nR 9\nL 5\nU 4\nR 9\nU 3\nL 8\nR 9\nD 3\nL 2\nR 3\nD 8\nR 6\nD 7\nR 6\nU 8\nL 4\nU 7\nR 1\nL 3\nD 8\nU 1\nL 9\nD 5\nL 5\nU 8\nR 9\nL 2\nU 5\nD 2\nU 3\nL 8\nR 9\nL 7\nR 4\nL 7\nR 10\nU 9\nD 8\nU 8\nR 1\nU 2\nD 6\nU 9\nL 4\nD 5\nU 9\nD 8\nR 5\nU 5\nD 3\nU 5\nR 2\nD 1\nU 4\nL 7\nR 6\nD 9\nL 9\nD 4\nL 4\nD 2\nL 3\nR 8\nL 1\nD 8\nR 2\nU 2\nD 3\nR 9\nL 5\nU 3\nL 10\nU 2\nD 7\nR 9\nL 7\nD 4\nL 10\nR 7\nL 4\nD 3\nR 8\nD 1\nR 6\nL 1\nU 1\nR 6\nU 8\nL 5\nR 7\nD 9\nL 1\nD 9\nR 4\nD 5\nR 7\nD 4\nU 10\nR 2\nL 1\nU 9\nD 1\nU 7\nR 10\nU 9\nR 5\nL 3\nU 5\nR 4\nD 6\nR 5\nL 4\nU 2\nL 1\nD 5\nU 7\nD 6\nR 8\nU 8\nD 8\nR 9\nD 7\nR 2\nU 10\nR 6\nL 10\nR 10\nU 8\nD 9\nR 9\nD 4\nR 1\nL 5\nU 2\nD 4\nR 4\nD 2\nL 9\nU 10\nD 3\nR 10\nL 8\nU 8\nR 2\nL 11\nU 6\nL 11\nU 7\nL 8\nD 8\nL 2\nR 7\nL 10\nR 10\nD 5\nL 7\nD 9\nL 7\nR 3\nU 11\nL 1\nU 11\nR 5\nD 2\nL 1\nD 1\nL 9\nR 6\nU 6\nL 8\nR 2\nD 7\nU 3\nL 7\nD 7\nL 1\nU 2\nL 4\nD 9\nR 6\nD 4\nR 2\nL 10\nR 8\nL 10\nU 2\nR 11\nL 11\nR 4\nU 3\nD 11\nR 10\nD 11\nL 1\nU 10\nR 10\nU 1\nL 3\nU 8\nD 6\nL 9\nR 7\nU 1\nR 5\nL 4\nD 5\nL 11\nD 3\nL 7\nD 3\nU 4\nD 6\nR 8\nU 2\nL 4\nR 8\nL 9\nR 10\nU 5\nL 6\nU 8\nR 5\nU 11\nR 5\nD 9\nR 6\nU 4\nL 2\nR 7\nL 5\nR 5\nU 4\nL 3\nR 2\nL 6\nD 7\nU 6\nD 8\nU 11\nD 2\nU 4\nR 4\nD 11\nL 6\nR 6\nD 5\nU 9\nD 1\nU 8\nD 9\nR 8\nD 11\nU 11\nR 2\nU 3\nR 11\nL 6\nU 3\nR 5\nL 12\nR 5\nL 4\nD 11\nU 10\nR 11\nU 8\nL 7\nR 10\nL 11\nR 2\nL 5\nR 12\nL 6\nR 7\nL 12\nD 5\nL 6\nU 9\nR 12\nU 12\nR 7\nD 5\nR 2\nD 7\nU 9\nR 11\nU 3\nL 8\nU 10\nL 4\nR 4\nD 3\nU 2\nR 10\nU 7\nD 7\nR 6\nU 11\nD 2\nL 7\nR 9\nD 12\nL 5\nU 2\nR 3\nU 3\nR 1\nL 7\nR 8\nD 12\nR 6\nU 12\nR 11\nD 12\nR 4\nD 8\nU 6\nD 1\nR 6\nU 2\nD 5\nU 7\nL 6\nD 5\nR 5\nL 6\nU 4\nD 12\nR 11\nL 3\nR 7\nL 5\nR 7\nU 9\nR 7\nD 1\nR 12\nL 5\nU 1\nR 12\nL 6\nD 1\nR 9\nL 5\nR 7\nD 11\nL 9\nR 6\nU 2\nR 6\nU 1\nR 10\nL 11\nU 10\nR 11\nU 6\nL 1\nD 10\nU 9\nL 3\nU 12\nR 4\nU 1\nD 4\nR 3\nU 4\nD 3\nU 13\nD 12\nU 11\nL 8\nD 5\nR 7\nD 5\nL 11\nU 3\nR 12\nD 3\nR 1\nL 8\nD 11\nL 3\nR 12\nU 4\nR 6\nL 10\nD 5\nL 10\nD 13\nU 5\nL 3\nR 10\nL 7\nR 13\nL 10\nD 8\nL 8\nU 8\nD 9\nR 8\nD 2\nU 6\nD 3\nR 8\nD 6\nR 13\nU 10\nD 6\nL 3\nR 4\nU 11\nR 6\nD 4\nR 4\nU 1\nR 11\nD 7\nR 11\nD 3\nR 8\nL 5\nU 9\nD 9\nU 13\nL 2\nU 9\nL 7\nU 10\nR 12\nU 7\nL 6\nR 10\nL 12\nU 6\nL 4\nD 8\nR 2\nL 2\nR 7\nL 9\nR 1\nD 3\nU 7\nL 3\nR 1\nD 3\nR 5\nU 10\nD 13\nL 3\nD 8\nU 4\nR 13\nD 8\nU 3\nD 9\nL 3\nD 9\nU 6\nL 10\nR 8\nL 2\nU 4\nL 8\nD 1\nU 13\nL 5\nU 3\nD 9\nL 8\nU 10\nL 4\nR 13\nD 9\nR 6\nL 5\nU 13\nD 11\nR 3\nU 8\nD 1\nU 5\nL 1\nD 6\nR 1\nU 7\nD 5\nR 14\nU 7\nD 13\nL 9\nU 13\nL 7\nR 14\nL 2\nU 10\nR 9\nL 14\nR 8\nL 5\nU 7\nR 14\nU 8\nD 9\nR 14\nL 9\nD 7\nR 1\nD 1\nL 13\nR 13\nD 4\nR 11\nD 2\nR 3\nU 3\nR 11\nL 1\nR 8\nU 9\nL 2\nR 12\nU 3\nL 14\nD 3\nU 8\nR 13\nL 2\nR 8\nD 8\nU 14\nR 6\nU 1\nL 3\nD 9\nU 6\nR 10\nL 4\nD 8\nL 10\nU 11\nD 9\nU 13\nL 11\nR 8\nL 7\nR 7\nU 8\nD 7\nL 9\nR 11\nL 6\nR 9\nU 12\nL 9\nR 3\nU 1\nD 11\nU 1\nR 10\nD 9\nL 11\nD 4\nU 6\nL 12\nD 11\nR 2\nD 2\nL 14\nR 6\nD 5\nL 12\nR 6\nD 6\nR 13\nU 5\nD 12\nU 8\nD 11\nR 6\nL 11\nU 4\nL 11\nU 12\nL 7\nD 7\nR 2\nU 11\nL 4\nU 9\nR 6\nD 4\nU 7\nR 1\nL 13\nD 1\nU 7\nL 1\nR 5\nU 10\nL 11\nD 4\nU 15\nL 5\nD 14\nU 8\nD 13\nR 2\nU 13\nD 1\nR 3\nU 2\nL 6\nD 1\nU 9\nD 9\nU 4\nD 5\nU 8\nD 13\nL 4\nU 12\nL 9\nR 9\nL 7\nU 8\nL 7\nR 4\nL 5\nU 6\nR 8\nU 13\nD 7\nL 8\nR 5\nD 6\nU 14\nL 10\nR 14\nL 13\nU 10\nD 6\nR 2\nU 14\nL 9\nR 4\nU 14\nR 7\nD 1\nU 5\nL 5\nD 4\nL 2\nU 11\nL 5\nD 12\nL 1\nD 14\nL 10\nR 14\nD 12\nL 10\nU 2\nD 13\nL 15\nU 1\nR 15\nD 14\nR 2\nU 7\nL 5\nU 15\nL 15\nD 9\nL 1\nD 13\nU 3\nR 15\nL 6\nD 10\nL 4\nU 10\nR 14\nL 8\nU 7\nD 10\nU 1\nR 7\nL 14\nR 5\nL 9\nD 15\nL 14\nR 14\nL 7\nR 6\nL 3\nD 13\nL 5\nD 10\nR 9\nL 2\nD 16\nU 9\nL 14\nR 2\nD 2\nR 1\nL 1\nU 7\nD 12\nR 4\nU 15\nR 7\nU 14\nR 2\nD 3\nR 6\nL 9\nU 8\nR 7\nL 8\nD 6\nR 13\nD 10\nL 9\nD 1\nU 14\nL 8\nR 3\nL 14\nR 2\nD 13\nL 1\nR 15\nU 5\nD 4\nR 9\nD 9\nL 3\nD 12\nR 4\nU 8\nL 6\nD 10\nL 6\nR 12\nD 14\nU 5\nD 13\nR 13\nU 11\nD 10\nR 16\nL 3\nU 10\nD 8\nL 1\nU 8\nD 4\nL 6\nR 12\nD 7\nL 5\nU 11\nR 5\nD 7\nL 2\nU 9\nL 8\nR 14\nD 5\nR 6\nU 10\nD 16\nU 4\nR 11\nU 3\nR 4\nU 5\nL 11\nR 12\nU 9\nR 9\nD 12\nR 8\nD 9\nL 5\nD 5\nU 11\nL 16\nU 2\nL 5\nR 10\nU 13\nR 10\nL 3\nD 3\nU 2\nL 14\nD 15\nL 8\nD 1\nL 10\nR 6\nL 5\nU 6\nR 14\nU 11\nR 16\nL 1\nR 16\nL 10\nU 9\nD 2\nL 2\nU 15\nL 3\nD 11\nL 16\nU 9\nD 17\nU 4\nD 14\nU 4\nL 5\nR 14\nL 2\nU 13\nD 1\nU 6\nR 3\nU 7\nD 12\nL 11\nU 6\nL 5\nD 16\nR 11\nL 2\nR 15\nD 3\nU 11\nR 2\nD 6\nR 16\nL 9\nR 4\nL 8\nD 4\nL 3\nD 15\nU 10\nD 4\nU 8\nR 2\nU 16\nL 9\nD 5\nR 8\nD 11\nR 13\nU 11\nD 2\nR 16\nD 10\nL 11\nU 6\nL 13\nD 10\nL 10\nR 13\nU 5\nR 10\nD 2\nR 2\nD 14\nL 15\nR 15\nD 1\nL 2\nU 17\nL 12\nR 9\nD 10\nL 2\nD 12\nR 8\nU 1\nL 6\nU 14\nL 15\nU 13\nL 15\nD 3\nU 8\nR 14\nU 3\nL 12\nR 5\nL 12\nR 12\nU 6\nD 10\nU 4\nD 11\nU 1\nD 17\nU 5\nD 8\nU 9\nR 9\nL 6\nR 10\nU 1\nD 3\nR 1\nD 4\nL 16\nD 16\nU 3\nL 17\nD 8\nR 15\nD 9\nR 7\nD 8\nR 17\nL 13\nU 16\nD 2\nL 1\nR 3\nD 11\nR 15\nL 10\nR 9\nU 1\nR 11\nL 15\nU 2\nR 12\nU 18\nR 18\nD 4\nU 7\nD 13\nU 18\nD 14\nU 7\nD 2\nL 1\nR 1\nU 4\nL 13\nR 4\nU 13\nL 16\nD 12\nR 4\nU 9\nD 11\nR 4\nL 16\nD 4\nL 8\nD 3\nR 9\nU 15\nR 3\nL 9\nU 2\nR 15\nL 5\nR 3\nD 17\nU 17\nR 11\nL 13\nU 8\nD 11\nL 12\nU 1\nD 5\nU 12\nD 2\nR 13\nD 6\nR 5\nD 10\nU 15\nR 7\nL 4\nR 8\nD 10\nU 17\nL 12\nU 14\nL 9\nD 18\nR 11\nU 13\nD 9\nL 1\nD 9\nU 6\nR 15\nL 1\nU 4\nD 13\nR 18\nU 3\nL 2\nU 18\nR 17\nL 14\nU 12\nR 7\nL 11\nD 3\nU 17\nD 9\nR 13\nL 18\nD 15\nR 16\nU 16\nL 12\nD 16\nR 18\nL 13\nD 8\nU 16\nD 2\nU 17\nD 4\nL 12\nU 3\nD 2\nR 3\nL 14\nD 7\nL 6\nU 5\nL 19\nR 19\nL 7\nR 1\nD 2\nU 11\nL 7\nU 8\nL 4\nR 4\nL 12\nU 7\nR 3\nU 3\nL 2\nR 3\nD 9\nR 16\nU 4\nR 12\nL 10\nD 3\nU 17\nD 6\nU 14\nD 2\nL 19\nU 3\nR 19\nL 11\nU 13\nR 11\nD 14\nL 4\nD 11\nU 9\nL 8\nU 18\nL 17\nD 7\nU 7\nR 19\nL 8\nD 6\nR 7\nU 19\nD 7\nR 7\nL 16\nR 11\nL 2\nR 10\nU 6\nR 2\nU 8\nL 8\nD 3\nL 12\nD 16\nU 1\nD 12\nL 4\nD 16\nR 13\nL 12\nR 11\nU 8\nL 6\nD 6\nL 1\nU 5\nL 3\nR 6\nU 8\nR 5\nU 4\nD 14\nR 7\nU 2\nL 9\nU 8\nR 13\nU 1\nD 15\nR 18\nD 15\nR 14\nD 15\nR 8\nD 16\nU 6\nL 7\nD 10\nR 9\nL 12\nR 11\nL 3\nR 12\nD 8\nU 14\nL 18`;

function distanceTchebychev(p1, p2){
  return Math.max(
    Math.abs(p1.x - p2.x),
    Math.abs(p1.y - p2.y)
  );
}

class Rope {

  constructor(nbKnots) {
    if (nbKnots < 2) throw new Error('Rope must have at least 2 knots');
    this.nbKnots = nbKnots;
    this.knots = Array.from({length: this.nbKnots}, () => ({x: 0, y: 0}));
    this.head = this.knots[0];
    this.tail = this.knots[this.nbKnots - 1];
    this.tailVisited = new Set();
    this.trackVisitedByTail();
  }

  trackVisitedByTail() {
    this.tailVisited.add(`${this.tail.x}:${this.tail.y}`);
  }

  movesHead(moves) {
    for (const move of moves) {
      this.moveHead(move);
    }
  }

  moveHead(move) {
    for (let i = 0; i < move.amount; i++) {
      this.movePart(this.head, move.dir);
      // all others parts are simply following the previous one
      for (let knotsInd = 1; knotsInd < this.nbKnots; knotsInd++) {
        const head = this.knots[knotsInd - 1];
        const tail = this.knots[knotsInd];
        if (distanceTchebychev(head, tail) < 2) break;
        this.moveTail(tail, head);
      }
      this.trackVisitedByTail();
    }
  }

  moveTail(tail, head) {
    if (head.x > tail.x) {
      this.movePart(tail, 'R')
    } else if (head.x < tail.x) {
      this.movePart(tail, 'L');
    }
    if (head.y > tail.y) {
      this.movePart(tail, 'U')
    } else if (head.y < tail.y) {
      this.movePart(tail, 'D');
    }
  }

  movePart(part, dir) {
    if (dir == 'L') part.x--;
    else if (dir == 'R') part.x++;
    else if (dir == 'D') part.y--;
    else if (dir == 'U') part.y++;
  }

}

const movesHead = input.split('\n').map(move => ({
  dir: move[0],
  amount: Number(move.slice(2)),
}));

// part 1
const rope = new Rope(2);
rope.movesHead(movesHead);
console.log(rope.tailVisited.size);

// part 2
const rope2 = new Rope(10);
rope2.movesHead(movesHead);
console.log(rope2.tailVisited.size);