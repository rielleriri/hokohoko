# A Guide to Hokohoko :grinning:

### Running the application :runner:
##### 1. Open "hokohoko" folder in VS Code and change directory to src
##### 2. Download all necessary libraries and packages
```
npm install react-scripts --save
npm install react-router-dom --save
npm install react-filepond --save
npm install tesseract.js --save
npm install react-bootstrap --save
```

##### 3. Run the application
```
npm start
```
##### The application should start automatically on your default web browser.

If your default browser is Google Chrome, you can run HokoHoko as a Chrome extension as well by doing the following. <br>
<img src="https://user-images.githubusercontent.com/49828224/114309442-b3534a80-9b19-11eb-82f1-13f70a8315a2.png" width="640" height="340"> 

</br>

### Manoeuvring the Application: Web Edition :computer:
##### In `Lists`, it shows all the products that are being compared. By clicking on each item, you can see the platforms and corresponding end price obtained from various screenshots that you have uploaded.

When you first run the app, you will be brought to this page.<br>
<img src="https://user-images.githubusercontent.com/49828224/114310133-6329b780-9b1c-11eb-9824-cf82f25b2e27.png" width="640" height="340" />

#### Add a new product
1. Click on `+`.<br>
<img src="https://user-images.githubusercontent.com/49828224/114310173-7f2d5900-9b1c-11eb-8f72-ead0e27baa9c.png" width="640" height="340" />

2. Type the name of the product, e.g. "Macbook" in this case, and click `Confirm`. <br>
<img src="https://user-images.githubusercontent.com/49828224/114310203-99ffcd80-9b1c-11eb-8b8f-854bce14a36f.png" width="640" height="340" /> 

You will be brought back to the `Lists` page, where you will see the product listed there. <br>
<img src="https://user-images.githubusercontent.com/49828224/114309592-40969f00-9b1a-11eb-8a36-eaddbbd62330.png" width="640" height="340" />

Upon clicking on the product, it will be expanded and an empty table with headers "Platform" and "End Price" is shown. <br>
<img src="https://user-images.githubusercontent.com/49828224/114309600-4a200700-9b1a-11eb-9769-0371d235413a.png" width="640" height="340" />

#### Upload screenshot
1. Click on `Upload`. <br>
<img src="https://user-images.githubusercontent.com/49828224/114309654-776cb500-9b1a-11eb-89a2-54ce562b6f2d.png" width="640" height="340" />

2. Upload a screenshot and type the platform name into the form. <br>
<img src="https://user-images.githubusercontent.com/49828224/114309680-94a18380-9b1a-11eb-9f4e-682397e318d7.png" width="640" height="340" />

  Upon clicking `Confirm`, you will be brought back to the `Lists` page where you can click on the product to see the details included in the table. <br>
<img src="https://user-images.githubusercontent.com/49828224/114309708-b26ee880-9b1a-11eb-88be-92eb0d4d7da3.png" width="640" height="340" />

3. To upload another screenshot, follow the same steps. <br>
<img src="https://user-images.githubusercontent.com/49828224/114309751-d8948880-9b1a-11eb-8deb-4e85bd3052bc.png" width="640" height="340" />

The results will be ranked and listed in the table in order of increasing end price. The top entry is the platform with the lowest end price for the product. <br>
<img src="https://user-images.githubusercontent.com/49828224/114309760-e2b68700-9b1a-11eb-8437-e4148c4c4aad.png" width="640" height="340" />

#### Edit product name
To edit the product name, e.g. from "Macbook" to "Macbook Pro" in this case, click on `Edit` and enter the updated product name before clicking on `Update`. <br>
<img src="https://user-images.githubusercontent.com/49828224/114309805-185b7000-9b1b-11eb-99e8-d054af4dcc9b.png" width="640" height="340" />

You will then be brought back to the `Lists` page where the name of the product is updated. <br>
<img src="https://user-images.githubusercontent.com/49828224/114309859-48a30e80-9b1b-11eb-8d95-f58f94a52698.png" width="640" height="340" />

#### Delete a product
To delete a product, click on  `Delete` and the product will be deleted from the page. <br>
<img src="https://user-images.githubusercontent.com/49828224/114309889-607a9280-9b1b-11eb-8fa9-394f25112c0c.png" width="640" height="340" />


</br>

### Manoeuvouring the Application: Mobile Edition :iphone:
##### To open the application on your phone, you will need your IP address. To find your IP address, go to your computer's command prompt and enter the command
###### For Windows:
```
ipconfig
```
###### For Mac or Linux:
```
ifconfig
```
##### Open your mobile browser and enter your ip address, followed by `:3000`
> For example, if your IP address is `10.124.139.25`
> Enter `10.124.139.25:3000` into your mobile browser

###### *Note: Make sure the hokohoko app is still running on VS Code!* <br>

The app works in the same way as in the Web version, so the same steps can be followed.




</br>

### Screenshot Specifications :clipboard:
##### 1. Screenshot should be of the checkout page of the product; either web or mobile versions are acceptable
##### 2. Screenshot should clearly show the end price at the bottom of the page
##### 3. Currency should be in SGD so acceptable formats of end prices include:
- SGD 9
- $ 99
- S$ 999
##### 4. Screenshot should be around 500px(W) x 1000px(H) 

###### *Note: On the mobile phone, a normal screen capture would be big enough to work with the OCR*

</br>

##### Samples of acceptable screenshots:
<img src="https://user-images.githubusercontent.com/61452236/113739478-6c88dd80-9732-11eb-831d-235e8cfb7262.jpg" width="300" height="550" />    <img src="https://user-images.githubusercontent.com/61452236/113739490-701c6480-9732-11eb-81a4-ed1c7cea7781.jpg" width="300" height="550" />

<img src="https://user-images.githubusercontent.com/61452236/113739440-6266df00-9732-11eb-89db-3cf177be586c.png" width="600" height="430" />

</br>

#### Samples of unacceptable screenshots:
<img src="https://user-images.githubusercontent.com/61452236/113740174-0e102f00-9733-11eb-8641-b7bc4d692786.jpg" width="300" height="550" />   <img src="https://user-images.githubusercontent.com/61452236/113740317-2c762a80-9733-11eb-8ee2-2a32a79ea1ca.jpg" width="300" height="550" />  <img src="https://user-images.githubusercontent.com/61452236/113740295-28e2a380-9733-11eb-9194-ec231112824b.png" width="100" height="200" />

<br>
The OCR technology in HokoHoko works well on acceptable screenshots (both mobile and web) taken from most e-commerce platforms (such as Lazada, Shopee, Amazon, Qoo10, Grab, foodpanda, ShopBack, Booking.com, FairPrice Online).
