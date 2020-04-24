package testSelenium;


import org.openqa.selenium.By;

import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;


public class testUpload {
		
	public static void main(String[] args) throws InterruptedException {		
		System.setProperty("webdriver.chrome.driver","C:/Users/x5021/Downloads/chromedriver_win32/chromedriver.exe");
		//WebDriver driver = new FirefoxDriver();
		WebDriver driver = new ChromeDriver();
		
		//driver.get("https://sudiptac.bitbucket.io");
		driver.get("http://localhost:3000/50.003-Frontend");
		//driver.get("https://www.google.com.sg");
		WebElement uploadElement = driver.findElement(By.tagName("input"));

        // enter the file path onto the file-selection input field
        uploadElement.sendKeys("C:\\Users\\x5021\\Downloads\\esc project template _final.xlsx");

        // check the "I accept the terms of service" check box
        driver.findElement(By.tagName("button")).click();

       
	}
}
