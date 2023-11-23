import { resolve } from 'path';

const entry = './src/battleship.js';
const output = {
    filename: 'battleship.bundle.js',
    path: resolve('./dist'),
}

export default {entry, output};