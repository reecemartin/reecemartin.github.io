# reecemartin.github.io

A personal website open for use by myself and others.

# What is the site?

The purpose of this site is to provide a resume/portfolio like presentation of my skills, achievements and interests, largely for purposes of sharing. However this site is also a place for me to try deploying and testing some frontend and web technologies 
for personal practice. 

I also feature some small demo features one of which is based on work in another one of my Github repositories.
https://github.com/reecemartin/binaryneuralnet

# Deployment

In order to deploy this website, cd into the project folder and ```npm run``` this should run the development server and open the website up on your browser via localhost. Once things look good you can run ```npm run build``` this will package things up so you can easily deploy to something like Github pages.

## New Personal Website Project

One big project I am currently planning is a total revamp of my personal website using React and a nice functional organization model. Ideally this will significantly simplify expansion and modification of my website in the future with plug and play components. In addition this will be an oppurtunity to clean up and beautify the site with a new layout and updated content.

### Update December 5 - 2019

The new personal website project is coming along nicely, I have replaced the navigation at the top of the page with nicely styled components courtesy of Material UI (https://material-ui.com/). I have also created both single and multi-picture components which have integrated styling and text functionality which will be a great asset in creating an attractive new bio website. 

### Update December 6 - 2019

The new navigation at the top of the screen is already growing on me but, ugh it doesn't look very good on mobile (see below).

![Desktop - Before](https://github.com/reecemartin/reecemartin.github.io/blob/master/personalwebsite2020/src/Images/BeforeDesktop.jpg)

As you can see things look pretty nice on desktop but, on mobile we have this.

![Mobile - Before](https://github.com/reecemartin/reecemartin.github.io/blob/master/personalwebsite2020/src/Images/Pixel2%20Before.png)

So beyond being hideous the buttons are pushing the page leading to potential for horizontal movement on mobile which just will not do. To rectify this I split the Button Group into two. This makes mobile look lovely.

![Mobile - After](https://github.com/reecemartin/reecemartin.github.io/blob/master/personalwebsite2020/src/Images/Pixel2%20After.png)

Unfortunately this means desktop looks a little screwy. 

![Desktop - Int](https://github.com/reecemartin/reecemartin.github.io/blob/master/personalwebsite2020/src/Images/AfterDesktop.jpg)

I was going to let this just slip by but, given I am trying to make this a decent website my habit of doing 0 mobile optimization is going to have to be eradicated. It's not even that I expected working with mobile to be that hard (though I've hard it can be annoying) I just could not be bothered previously. Fortunately, the rest of my page outside of the header looks fine on mobile. Thanks to React's component based architecture this means I simply need to install this NPM package for detecting mobile device usage (https://www.npmjs.com/package/react-device-detect) and then I can drop the isMobile variable into a ternary and voila! I've got the best of both worlds!

Now at this point things have got a little gross in the code since both for this logic and the multiple picture logic I am duplicating a ton of code. My next step will likely be a refactor of that! I will also need to refactor the packaging before I push things live but, that can wait.
