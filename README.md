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

</br>

### Manoeuvring the Application: Web Edition :computer:
##### In the header, you should see two tabs: `Lists` and `New Comparison` which you can click
##### In `Lists`, it shows all the products that are being compared and their end prices at the side
##### In `New Comparison`, it allows you to upload a screenshot of the checkout page of the product you want to compare. The OCR will process the image to identify the end price and return it to the user. Then click on the `Continue` button and the application will prompt you to enter the platform the product was from, e.g. Shopee, Lazada.

<img src="https://user-images.githubusercontent.com/61452236/113733499-1b2a1f80-972d-11eb-87d2-2fa9c07b1fb7.png" width="400" height="200" /> 

<img src="https://user-images.githubusercontent.com/61452236/113734301-cd61e700-972d-11eb-9d6b-94e912cc298c.png" width="400" height="200" /> <img src="https://user-images.githubusercontent.com/61452236/113734363-dd79c680-972d-11eb-9e6c-d74a27e051be.png" width="400" height="200" />


</br>

### Manoeuvouring the Application: Mobile Edition :iphone:
##### To open the application on your phone, you will need your IP address. To find your IP address, go to your computer's command prompt and enter the command
###### For Windows:
```
ipconfig
```
###### For Mac or Linux:
```
Ifconfig
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

