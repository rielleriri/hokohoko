# A Guide to HokoHoko :grinning:

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
<img src="https://user-images.githubusercontent.com/49828224/114294438-3e5c2280-9ad1-11eb-85e2-a2ea50667162.png" width="640" height="340"> 

</br>

### Manoeuvring the Application: Web Edition :computer:
##### In the header, you should see two tabs: `LISTS` and `ADD LIST` which you can click
##### In `LISTS`, it shows all the products that are being compared. By clicking on each item, you can see the platforms and corresponding end price obtained from various screenshots that you have uploaded.
##### In `ADD LIST`, you can add a new product for which you want to compare the end prices from different platforms. <br>

When you first run the app, you will be brought to this page. <br>
<img src="https://user-images.githubusercontent.com/49828224/114292780-b3c0f680-9ac3-11eb-98d7-c311991f83d5.png" width="640" height="340" />

#### Add a new product
1. Click on `ADD LIST`.<br>
<img src="https://user-images.githubusercontent.com/49828224/114292811-dc48f080-9ac3-11eb-809d-44d6a73d388f.png" width="640" height="340" />

2. Type the name of the product, e.g. "Macbook" in this case, and click `Add`. <br>
<img src="https://user-images.githubusercontent.com/49828224/114292831-07334480-9ac4-11eb-9654-26d96459e891.png" width="640" height="340" /> 

You will be brought back to the  `LISTS` page, where you will see the product listed there. <br>
<img src="https://user-images.githubusercontent.com/49828224/114292878-4e213a00-9ac4-11eb-86a8-6f6693071661.png" width="640" height="340" />

Upon clicking on the product, it will be expanded and an empty table with headers "Platform" and "End Price" is shown. <br>
<img src="https://user-images.githubusercontent.com/49828224/114292894-701abc80-9ac4-11eb-9975-7b963d95efbd.png" width="640" height="340" />

#### Upload screenshot
1. Click on `Upload`. <br>
<img src="https://user-images.githubusercontent.com/49828224/114292913-888ad700-9ac4-11eb-8f72-9323b2248000.png" width="640" height="340" />

2. Upload a screenshot and type the platform name into the form. <br>
<img src="https://user-images.githubusercontent.com/49828224/114292979-0818a600-9ac5-11eb-9900-42c5ffe969e2.png" width="640" height="340" />

Upon clicking update, you will be brought back to the list page where you can click on the product to see the details included in the table. <br>
<img src="https://user-images.githubusercontent.com/49828224/114292993-22528400-9ac5-11eb-885b-ade28033fa1f.png" width="640" height="340" />

3. To upload another screenshot, follow the same steps. <br>
<img src="https://user-images.githubusercontent.com/49828224/114293004-3b5b3500-9ac5-11eb-8f94-d4cf634ecb34.png" width="640" height="340" />

The table will list results from both screenshots. <br>
<img src="https://user-images.githubusercontent.com/49828224/114293018-575ed680-9ac5-11eb-91f8-eec309ab76d8.png" width="640" height="340" />

#### Edit product name
To edit the product name, e.g. from "Macbook" to "Macbook Pro" in this case, click on `Edit` and enter the updated product name before clicking on `Update`. <br>
<img src="https://user-images.githubusercontent.com/49828224/114293044-73627800-9ac5-11eb-8dac-b0a119d9b3b2.png" width="640" height="340" />

You will then be brought back to the `LISTS` page where the name of the product is updated. <br>
<img src="https://user-images.githubusercontent.com/49828224/114293058-8b39fc00-9ac5-11eb-895c-79d0ccfb1552.png" width="640" height="340" />

#### Delete a product
To delete a product, click on  `Delete` and the product will be deleted from the page. <br>
<img src="https://user-images.githubusercontent.com/49828224/114293072-aa388e00-9ac5-11eb-9f25-056ea68539be.png" width="640" height="340" />


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

###### *Note: Make sure the hokohoko app is still running on VS Code!*
##### On the mobile browser, you should see the menu button on the top-right hand corner which you can click to reveal the `Lists` and `New Comparisons` tabs
<img src="https://user-images.githubusercontent.com/61452236/113671871-8520d580-96e9-11eb-871a-3726420bdf7c.jpg" width="300" height="500" />   <img src="https://user-images.githubusercontent.com/61452236/113672255-0ed0a300-96ea-11eb-817b-ae375868e667.jpg" width="300" height="500" />


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
