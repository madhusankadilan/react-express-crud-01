import axios from 'axios';
import { getHttpClient } from './getHttpClient';
import { postHttpClient } from './postHttpClient';
import { deleteHttpClient } from './deleteHttpClient';
import { putHttpClient } from './putHttpClient';

const httpDefaults = axios.defaults;

const http = {
    get: getHttpClient,
    post: postHttpClient,
    delete: deleteHttpClient,
    put: putHttpClient,
};

export { httpDefaults, http };
