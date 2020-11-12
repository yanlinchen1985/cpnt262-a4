# Cpnt262-a4 - Express Gallery Website
by Lynn Chen  Nov,6,2020



## Links

- Heroku URL: https://woodboxhome.herokuapp.com/

- GH repo: https://github.com/yanlinchen1985/cpnt262-a4

  


## Attributions

Thanks for the help from my groupmate [**Patrick Bello**](https://github.com/mayorbcode) .

Some code come from Tony's sample code in class [SAIT WBDV](https://sait-wbdv.github.io/) 
https://github.com/sait-wbdv/in-class



## Comments

I met some issue when I create the gallery. First I put  'src="/images/gallery/${woodbox.id}" '  or 'src="images/gallery/${woodbox.imagePath}' in the <img> tag, but it could not work. Then I found the mistake, I changed it into ' src="/images/gallery/${woodbox.id}.jpg ' , it worked well.

The other problem I tried to fix is the CSS. To be honest, I did not know why I chose this template! I deleted some code in html to make the page seem simple ,but  some thing changed like the nav. I can not see the nav with hover, active and current states. I fixed the form style in main.css because it has the form in footer,   the check-box is hidden. 

Thank you for teaching!
