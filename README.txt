TigerList
4.11.24

1) Description
2) Installation
3) Usage
4) Contributing
5) Acknowledgements

1)
TigerList is a website for Colorado College to buy, sell and exchange goods. Mimicking an online marketplace, TigerList allows only Colorado College students to buy and sell goods. Instead of other online marketplaces, TigerList guarantees products are within walking distance, are in safe locations and are amongst other students. This increases safety of students and reusability of any item on campus. Colorado College students have no single interface to message each other about buying and selling goods. Messages end up in class GroupMes or Instagram stories or by word of mouth. TigerList is a confluence for students to buy and sell goods without going to extreme measures.

This is a [Next.js](https://nextjs.org/) project with a PostgreSQL database, hosted on an ITS server (IP: 10.3.0.49).

-------------------------------------------------------------------------------------

2)
For the developer to run the server, we have compiled everything into a 'setup.sh' script, which lives in the j_moran directory (the parent directory of TigerList). Run this, and then enter 'tigerlist.coloradocollege.edu' in your favorite browser. This script stashes all correct packages into the working evnviornment, reconfigures permissions appropriately, then uses 'npm run dev' to actually launch our application in development environment.

In order to toggle CAS authentication on, run 'cas-on.sh'. In order to turn it off, run 'cas-off.sh'.

If a user is on campus and connected to guest or gadgets wifi, then no special software installation is required for use; all that is necessary is entering the URL “http://tigerlist.coloradocollege.edu” in their preferred browser. In order to view the site off-campus, the user needs to use CC’s desktop virtualization software VMWare Horizon Client. Instructions to download are linked here: https://www.coloradocollege.edu/offices/its/guides/connect-from-off-campus.html. When downloading the VMWare software to whichever operating system, it is absolutely essential the user downloads no later than version 2909! The TigerList server is not compatible with the updated versions. If at any point the user is prompted to upgrade versions, they must select no. Once VMWare is installed, the user is presented with a remote browser, and then they can enter the same URL in that machine’s browser. Unfortunately, so long that our code base exists on ITS server, there is no way to access the server off-campus without VMWare.

-------------------------------------------------------------------------------------
3)
After the system’s owners successfully run the Next.js application in the remote server, all a client needs to do is enter the URL “http://tigerlist.coloradocollege.edu” in their browser, or in VMWare Horizon Client if off campus.
        Once authenticated, the user is then brought to the browse page, where they can see all listings currently stored in the database. From here, they can browse through listings, and click on a listing if they are interested. This will display a page with the product information and the seller’s contact information. From there, the user can contact the seller on their own. We decided not to implement any sort of transactions within our application since students prefer to work out a payment method on their own, and to avoid security concerns with exchanging money.
There is a consistent navigation bar on each page to get to any other page - make listing, search, or a profile option to edit your own listings.  We provide users with a simple interface and options to consistently navigate to any other page in the system. In order to sell a good, the user should click the “Make Listing” section of the navigation bar. This takes the user to a page which prompts them for product name, price, etc, all which contain regex logic to verify inputs. The user can also add an image if they wish. Once finished, they click the “Make Listing” button, which will result in a small toast verifying their listing has successfully been uploaded. The listing is now on the browse page for all to see.
        To edit a listing, the user must click the profile icon, which is the icon furthest to the right of the navigation bar. This will display a page with all of that user’s listing. From here, the user can click “edit” on the listing they wish to edit, which will bring them to a page similar to the “make listing” page. Users do not have to sign out of the app, as it is integrated with Colorado College’s single sign-on protocol and they will be signed off automatically after ten minutes of inactivity.

-------------------------------------------------------------------------------------

4)
If you wish to continue making TigerList better, we have a number of bugs and features to implement. 

First is the filter and search bar logic. They currently exist for aesthetic reasons, but no logic is implemented behind them.

Next, there is a persistent ECONNREFUSED error which happens somewhere during communication between front and backend when a page is first loaded. It never interferes with functionality, but an error is thrown. Catching the error will interfere with functionality as the fetched assignment wont be completed

The initial browse page takes a while to load, and sometimes only loads after hitting refresh.

Active/hold on the MyListings page is not implemented.

When CAS is on, the MyListings page has a number of errors.

Contact l_flanagan@coloradocollege.edu with any more questions.

-------------------------------------------------------------------------------------

5)
We would like to give a major thank you to Cory Scott and Blake Jackson, our capstone advisors. We also would like to extend a thank you to the Colorado College ITS team, who helped us with our server. Lastly, we would like to thank all of our Colorado College '24 Computer Science seniors for providing us with inredible suggestions and feedback throughout the creation of TigerList.

