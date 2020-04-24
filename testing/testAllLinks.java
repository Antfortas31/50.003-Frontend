package testSelenium;

import org.openqa.selenium.By;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class testAllLinks {
	public static void main(String[] args) throws InterruptedException {		
		System.setProperty("webdriver.chrome.driver","C:/Users/x5021/Downloads/chromedriver_win32/chromedriver.exe");
		//WebDriver driver = new FirefoxDriver();
		WebDriver driver = new ChromeDriver();
		
		//driver.get("https://sudiptac.bitbucket.io");
		driver.get("http://localhost:3000/50.003-Frontend");
		//driver.get("https://antfortas31.github.io/50.003-Frontend/");
		
		//driver.get("https://www.google.com.sg");
		
		// get all the links
		java.util.List<WebElement> links = driver.findElements(By.tagName("a"));
		
		// click all links in a web page
		for(int i = 0; i < links.size(); i++)
		{
			
			boolean staleElementLoaded = true;
			//the loop checks whether the elements is properly loaded
			while(staleElementLoaded) {
				try {
					//navigate to the link
					driver.navigate().to(links.get(i).getAttribute("href"));
					Thread.sleep(3000);
					//click the back button in browser
					
					driver.navigate().back();
					Thread.sleep(3000);
					links = driver.findElements(By.tagName("a"));
					
					staleElementLoaded = false;
				} catch (StaleElementReferenceException e) {
					staleElementLoaded = true;
				}
			}
		}
		System.out.println("all links reachable have titles");
		
	}
}
