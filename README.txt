The scripts needed to:
1-"build": "npx tsc",
2-"start": "nodemon dist/index.js",
3-"jasmine": "jasmine",
4-"test": "npm run build & npm run jasmine",
5-"prettier": "prettier --config .prettierrc src/**/*.ts --write",
6-"lint":"eslint src/**/*.ts"

the endpoints are:
1-/api to access api main point
2-/api/images?filename=icelandwaterfall&width=200&height=200 
  to access the image endpoint and resize the image 

the functionality is:
1-validQuery in the middleware validQuery see if the user sent request with filename,width,height or not to continue processing
2-isFileExist in the middleware logger see if the file that we want to resize is exist or not
3-resize in the middleware logger see if the image we want to resize already exist or not 
  if(already exist) sendFile to browser without resizing image again
  else call resizing function to resize that image and send it


Testing with jasmine:
1- apllied tests on the endpoints using supertest
2- apllied tests on the availability of images files
2- applied tests on image resizing function 
