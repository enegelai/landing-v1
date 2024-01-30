Why is my Wi-Fi network not showing up?
If the light on your router is flashing green or red, the router is not fully powered up yet. Give it a few minutes and check back.
If the light on your router stays on red, then reboot or power down both your RIO router and modem. Give it a minute, then turn both your modem and RIO router power back on.
If the light on your router is flashing blue and red, the firmware of your router is updating.
![Router Status lights](https://www.enegel.ai/bot/rio/images/media/image7.jpeg)


Why can't I connect to the Wi-Fi network?
If your device cannot connect to the WiFi network, here are a few things to check.
The first device that connects to the WiFi does not need approval as it is automatically allowed. The easiest way to automatically connect your first device is to scan the QR code found on the back of your router. You can also enter the password manually.
If this is your second connected device, it needs to be approved in your RIO app by the admin device. You should have received a splash page or push notification alerting you of the connection attempt.
If you have already been approved, you may be putting in the incorrect password. Use the password found on the bottom of your router. If you forgot your password, use the app to recover your password and reset it to something you will remember.
If you are in a large house and only use a single RIO router, you may be out of range and need to move closer. You can resolve this by purchasing an additional RIO and enabling mesh extension.
If the device is the first to be admitted, we recommend sharing the QR password code to keep it easy. To get to this screen, click on share passwords at the bottom of the dashboard, select what SecureRoom you’d like to have that device automatically approved and assigned to, and deliver the QR code via SMS text or email. You can also have guests scan the QR code shown off the app from the admin device.
Make sure your device has WiFi capability, some units may only allow bluetooth and/or direct connection via ethernet.


Why is my internet connection slow?
You can check the speed of your internet connection in the RIO mobile app. Go to system, click on speed check, and there you will be able to diagnose if it is the router causing the issue.
![VPN Details](https://www.enegel.ai/bot/rio/images/media/image27.jpeg)
If you have a VPN enabled and you have selected a server that is far away from your physical location, this can cause a latency.
Change the VPN location to somewhere nearby. Check your VPN setup page to confirm your selected server location.
Go to your RIO dashboard, look at your connected devices, see how many are active. Also, go to system, click on log activity, check if any device is transmitting/receiving an unusual amount of volume. This way you can be assured that your router is not being used as a malicious bot, or by an unauthorized person such as your neighbor.
When a device has been admitted, we recommend you add a name to the device to easily identify the device in the mobile app, especially the log activity and connected devices section.
Check for local network outage on your internet service providers website.
The router automatically updates firmware over the air whenever there is an upgrade, as long as the router is connected to the internet. During the upgrade, this may cause a temporary disruption in internet connectivity. RIO will push upgrades typically in the early hours to avoid disruption.


How do I reset my router?
While powered on, use a pin to push the small reset button found on the back of the RIO router. This is found between the WAN port and On/Off button. Push and hold the reset button for 5 seconds. The router will start flashing red when reset is in process.
When your router is reset, all of your previous configurations are gone and the router has now been set to the factory settings.
The information deleted includes approved devices, VPN credentials, passwords, user ID, and any changed SecureRoom.


Why do I keep getting disconnected from the Wi-Fi?
Check your log activity in the RIO mobile app, to ensure there is no unusual volume occurring from your connected devices.
If you are in a large house and only use a single RIO router, you may be out of range and need to move closer. You can resolve this by purchasing an additional RIO and enabling mesh extension.


How can I change my Wi-Fi password?
There are two levels of passwords that you can change in your RIO. The SSID/WiFi network name and individual SecureRooms.
You have 4 SSID’s - Admin, Guest, Shared, and Managed.
The only name you cannot change is Admin. The reason is so you always know which room the Admin devices should belong to.
You can change the passwords to all 4 SSID’s. If you change the password to the SSID, all devices connected under the network have to sign back in using the new password.
RIO allows you to create up to 16 SecureRooms (VLAN). You can rename all rooms, except for Admin. The reason is so you always know which room the Admin devices should belong to.
Each SecureRoom has its own password. Once a SecureRoom password has been changed, you will only need to sign back in using the new password on the devices assigned to that room.


Why is my Wi-Fi signal weak in certain areas of my home?
If you are in a steel framed home, you may be experiencing wave interference. Devices that emit frequencies close to 2.4ghz can cause interference (ex: Microwaves).
If you are in a large house and only use a single RIO router, you may be out of range and need to move closer. You can resolve this by purchasing an additional RIO and enabling mesh extension.


How do I update my router's firmware?
When you power on your router for the first time, RIO will automatically check to confirm it is on the latest mobile app and firmware version. If not, both will be updated automatically
The router automatically updates firmware over the air whenever there is an upgrade, as long as the router is connected to the internet. During the upgrade, this may cause a temporary disruption in internet connectivity. RIO will push upgrades typically in the early hours to avoid disruption.


What should I do if I suspect unauthorized devices are using my Wi-Fi?
Connected Devices: Check to confirm if there are any unknown devices connected to your router.
![Connected Devices](https://www.enegel.ai/bot/rio/images/media/image32.jpeg)
Pending devices: Check to see what devices are being quarantined, awaiting approval.
Blocked devices: Check to see what devices are blocked from your RIO.
![Blocked Devices](https://www.enegel.ai/bot/rio/images/media/image33.jpeg)
Check for repeat offenders as this may be a sign of cyber hacking.
Go to your log activity display to see what devices are consuming a large volume of traffic.
To defend your networks security, change password.


How can I improve my router's security?
Change default passwords.
Assign devices to dedicated SecureRooms. Assign IoT and Smart Home devices (Alexa, Roomba, baby cameras, Ring cameras) to their own dedicated SecureRoom with VPN enabled. This will protect the devices by encrypting all of the communication with their server.
Assign guest devices only to a guest SecureRoom. Once a guest device exits your network, they are automatically removed and cannot re-enter without being approved again.
You have the ability to turn on VPN for each SecureRoom. Each SecureRoom has the option to select 1 of 2 server locations.


Why is my router's LED blinking or showing a different color?
![Router Status lights](https://www.enegel.ai/bot/rio/images/media/image7.jpeg)


How do I set up port forwarding?
Port forwarding is not supported with RIO at this time.


Is it possible to access the router remotely?
Yes. Turn on WAN - Wide Area Network.
We do not recommend turning this on unless needed as it can create a critical cyber vulnerability.
This option has to be turned on while the device is locally connected to the router. It cannot be turned on when the device is remote, for security reasons.


How do I set up a DMZ?
DMZ is not supported with RIO at this time.


Can I connect multiple routers to extend my Wi-Fi range?
Yes, You can purchase multiple RIO units to extend your WiFi range through mesh extension.


Why can't I access certain websites or services through my Wi-Fi?
![Rio Secured Rooms Device Parental Controls](https://www.enegel.ai/bot/rio/images/media/image22.jpeg)
Unlike other routers, RIO takes a proactive approach through the method of allowlisting. This means you can only access the websites listed, blocking everything else.
Check the SecureRoom your device is in, click on parental controls, and see if this protection is enabled. If enabled, check to see what websites are listed. These are the only sites you will be able to go visit.
Check the privacy and security settings of your web browser. Some websites do not allow access if they deem you are too private.
If your VPN server location is set to a different/foreign country, certain websites may not permit you to access from that country.



Can I set up WPS (Wi-Fi Protected Setup)?
Yes, WPS button is on back of router.


Can I use IPv6 with my Router?
IPv6 is not supported with RIO at this time.


Can I prioritize certain devices or applications for better performance?
No


Can I access my router settings from a web browser?
Yes. Type 192.168.50.1 into your browser


Is it possible to use a VPN with my router?
Yes, RIO router provides you with VPN access only through RIO’s VPN services. RIO provides you with 12 months free of RIO VPN.
RIO can pass through most major vpn providers already installed on your devices. However, you cannot use other VPN providers within RIO.


What are the default login credentials for my router?
Default login credentials can be found on the sticker at the bottom of the router 
![Router Login Enter the username and password shown on the sticker at the bottom of the router](https://www.enegel.ai/bot/rio/images/media/image10.jpeg)


What do I do if I change to a new phone? How do I become the Admin again?
1) The user will need to login with the same Rio account they used in the previous phone.
2) Router finds that the user is not logging to the router from the earlier phone. The user will be prompted to enter the router's default admin password that is on the sticker.  It then validates Rio account id, latest admin password of the router and default admin password of the router  and allows admin access.
This process is also applicable if the user deleted the App in the existing phone.


Can I have more than 1 device as an Admin?
Yes you can. The first approved device is your primary Admin.
The rest of your devices will have the same privileges. The difference is, the primary admin device can kick out any of the supervisor devices - not the other way around.
