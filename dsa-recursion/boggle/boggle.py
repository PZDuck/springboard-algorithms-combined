"""Boggle word check.

Given a 5x5 boggle board, see if you can find a given word in it.

In Boggle, you can start with any letter, then move in any NEWS direction.
You can continue to change directions, but you cannot use the exact same
tile twice.

So, for example::

    N C A N E
    O U I O P
    Z Q Z O N
    F A D P L
    E D E A Z

In this grid, you could find `NOON* (start at the `N` in the top
row, head south, and turn east in the third row). You cannot find
the word `CANON` --- while you can find `CANO` by starting at the
top-left `C`, you can 't re-use the exact same `N` tile on the
front row, and there's no other `N` you can reach.

For example::

    >>> board = make_board('''
    ... N C A N E
    ... O U I O P
    ... Z Q Z O N
    ... F A D P L
    ... E D E A Z
    ... ''')

`NOON` should be found (0, 3) -> (1, 3) -> (2, 3) -> (2, 4)::

    >>> find(board, "NOON")
    True

`NOPE` should be found (0, 3) -> (1, 3) -> (1, 4) -> (0, 4)::

    >>> find(board, "NOPE")
    True

`CANON` can't be found (`CANO` starts at (0, 1) but can't find
the last `N` and can't re-use the N)::

    >>> find(board, "CANON")
    False

You cannot travel diagonally in one move, which would be required
to find `QUINE`::

    >>> find(board, "QUINE")
    False

We can recover if we start going down a false path (start 3, 0)::

    >>> find(board, "FADED")
    True


An extra tricky case --- it needs to find the `N` toward the top right,
and then go down, left, up, up, right to find all four `O`s and the `S`::

    >>> board2 = make_board('''
    ... E D O S Z
    ... N S O N R
    ... O U O O P
    ... Z Q Z O R
    ... F A D P L
    ... ''')

    >>> find(board2, "NOOOOS")
    True

"""


def make_board(board_string):
    """Make a board from a string.

    For example::

        >>> board = make_board('''
        ... N C A N E
        ... O U I O P
        ... Z Q Z O N
        ... F A D P L
        ... E D E A Z
        ... ''')

        >>> len(board)
        5

        >>> board[0]
        ['N', 'C', 'A', 'N', 'E']
    """

    letters = board_string.split()

    board = [
        letters[0:5],
        letters[5:10],
        letters[10:15],
        letters[15:20],
        letters[20:25],
    ]

    return board



def find(board, word):
    """Can word be found in board?"""
    for i in range(len(board)):
        for j in range(len(board[0])):
            if board[i][j] and search(board, i, j, word):
                return True
    return False

def search(board, i, j, word, count=0):
    if count == len(word):
        return True
    
    if (i < 0 or j < 0 or i >= len(board) or j >= len(board[0]) or board[i][j] != word[count]):
        return False

    curr = board[i][j]
    board[i][j] = '#'

    found = search(board, i + 1, j, word, count + 1) or search(board, i - 1, j, word, count + 1) or \
        search(board, i, j + 1, word, count + 1) or search(board, i, j - 1, word, count + 1)    

    board[i][j] = curr
    return found

if __name__ == '__main__':
    import doctest
    if doctest.testmod().failed == 0:
        print("\n*** ALL TESTS PASSED; YOU FOUND SUCCESS! ***\n")


"""
LeetCode Word Search II Attempt

class Solution:
    def __init__(self):
        self.sides = [(-1,0),(0,1),(1,0),(0,-1)]
        
    def checkPos(self, board, word, i, j, curr, s=""):
        for k in self.sides:
            if i+k[0] < 0 or j+k[1] < 0 or i+k[0] >= len(board) or j+k[1] >= len(board):
                continue
                
            if word[curr] == board[i+k[0]][j+k[1]]:
                s += board[i+k[0]][j+k[1]]
                curr -= 1
                return self.checkPos(board,word,i+k[0],j+k[1],curr,s)
        return s
    
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        out = []
        for i in words:
            curr = len(i) - 1
            for row in range(len(board)-1):
                for letter in range(len(board[row])-1):
                    if self.checkPos(board,i,row,letter,curr) == i[::-1]:
                        out.append(i)
        return out
"""

"""
LeetCode Word Search Second Attempt (Using Trie)

class Node:
    def __init__(self, val=""):
        self.val = val
        self.complete = False
        self.pointers = [None for i in range(26)]
        
    def get(self, letter: str) -> str:
        for i in self.pointers:
            if i:
                if letter == i.val:
                    return i
            
        return None


class Trie:

    def __init__(self):
        self.root = Node()

    def insert(self, word: str) -> None:
        current = self.root
        for i in range(len(word)):
            loc = ord(word[i]) - 97
            if not current.pointers[loc]:
                current.pointers[loc] = Node(word[i])
            current = current.pointers[loc]
        
        current.complete = True


class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        trie = Trie()
        out = []
        pointer = trie.root
        
        for word in words:
            trie.insert(word)
        
        for i in range(len(board)):
            for j in range(len(board[0])):
                self.search(board, pointer, i, j, "", out)
        
        return out
    
    def search(self, board, pointer, i, j, path, out):
        if pointer.complete:
            out.append(path)
            pointer.complete = False
        
        if i < 0 or j < 0 or i >= len(board) - 1 or j >= len(board[0]):
            return
        
        curr = board[i][j]
        pointer = pointer.get(curr)
        
        if not pointer:
            return
        
        board[i][j] = "#"
        
        self.search(board, pointer, i + 1, j, path + curr, out)
        self.search(board, pointer, i - 1, j, path + curr, out)
        self.search(board, pointer, i, j + 1, path + curr, out)
        self.search(board, pointer, i, j - 1, path + curr, out)
        
        board[i][j] = curr

"""