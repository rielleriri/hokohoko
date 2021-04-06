# A Guide to Hokohoko :grinning:

### Running the application
##### 1. Open "hokohoko" folder in VS Code
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

### Manoeuvring the Application: Web Edition
##### In the header, you should see two tabs: `Lists` and `New Comparison` which you can click
##### In `Lists`, it shows all the products that are being compared and their end prices at the side
##### In `New Comparison`, it allows you to upload a screenshot of the checkout page of the product you want to compare. The OCR will process the image to identify the end price and return it to the user. Then click on the `Continue` button and the application will prompt you to enter the platform the product was from, e.g. Shopee, Lazada.

</br>

### Manoeuvouring the Application: Mobile Edition
##### To open the application on your phone, you will need your IP address. To find your IP address, go to your computer's command prompt and enter the command
##### For Windows:
```
ipconfig
```
##### For Mac or Linux:
```
Ifconfig
```
##### Open your mobile browser and enter your ip address, followed by `:3000`
> For example, if your IP address is `10.124.139.25`
> Enter `10.124.139.25:3000` into your mobile browser

###### *Note: Make sure the hokohoko app is still running on VS Code!*
##### On the mobile browser, you should see the menu button on the top-right hand corner which you can click to reveal the `Lists` and `New Comparisons` tabs

</br>

### Screenshot Specifications
