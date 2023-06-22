

import { uploadImage, } from './saveImage';
import {addUserInfo } from './saveJson';
import {uploadJPGImage} from './saveImage';
import {uploadFileFn} from './saveImage'




// Import other functions as needed

// Export each function individually or use the wildcard export
export const UploadImage = uploadImage;
export const AddUserInfo = addUserInfo;
export const cloudStorage = uploadJPGImage;
export const uploadFile = uploadFileFn;

// Export other functions as needed