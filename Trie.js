class TrieNode {
    constructor() {
        this.children = {};         // Map to store children nodes
        this.isEndOfWord = false;   // Marks if a word ends here
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!(char in node.children)) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        const node = this._traverse(word);
        return node !== null && node.isEndOfWord;
    }

    startsWith(prefix) {
        return this._traverse(prefix) !== null;
    }

    _traverse(string) {
        let node = this.root;
        for (const char of string) {
            if (!(char in node.children)) return null;
            node = node.children[char];
        }
        return node;
    }
}