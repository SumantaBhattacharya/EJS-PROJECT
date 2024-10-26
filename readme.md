# ***E-commerce bags ***
```bash
npm init
```
`Instalations`
```bash
npm i express mongoose
npm i jsonwebtoken cookie-parser bcrypt
npm i multer
```

usermodel
full name - string
email - string
password - string
card - array
isadmin - boolean
orders - array
contact - number
picture - db

product
image
name
price
discount
bgcolor
panelcolor
textcolor

### Kebab Case
- **Format**: All words are lowercase and separated by hyphens (`-`).
- **Example**: `my-variable-name`, `get-user-data`
- **Usage**: Commonly used in URLs and CSS classes, where spaces aren’t allowed, and hyphens improve readability.

### Camel Case
- **Format**: The first word is lowercase, and each subsequent word starts with an uppercase letter. No spaces or underscores are used.
- **Example**: `myVariableName`, `getUserData`
- **Usage**: Commonly used in JavaScript, Java, and many other programming languages for naming variables and functions.


<!-- control + shift + p = git keep -->


PS C:\Users\SUDIP BHATTACHARYA> Get-CimInstance -Namespace root\wmi -ClassName WmiMonitorBasicDisplayParams | Select-Obj
ect -Property *


Active                        : True
DisplayTransferCharacteristic : 120
InstanceName                  : DISPLAY\DELD054\5&617c5fb&0&UID4353_0
MaxHorizontalImageSize        : 48
MaxVerticalImageSize          : 27
SupportedDisplayFeatures      : WmiMonitorSupportedDisplayFeatures
VideoInputType                : 1
PSComputerName                :
CimClass                      : root/wmi:WmiMonitorBasicDisplayParams
CimInstanceProperties         : {Active, DisplayTransferCharacteristic, InstanceName, MaxHorizontalImageSize...}
CimSystemProperties           : Microsoft.Management.Infrastructure.CimSystemProperties


<!-- PS C:\Users\SUDIP BHATTACHARYA> Get-WmiObject -Namespace root\wmi -Class WmiMonitorID | ForEach-Object { $_.UserFriendly
Name }
68
69
76
76
32
83
50
50
52
48
76
0
0
PS C:\Users\SUDIP BHATTACHARYA> Get-CimInstance -ClassName CIM_VideoControllerResolution | Select-Object SettingID, Hori
zontalResolution, VerticalResolution, RefreshRate

SettingID                                               HorizontalResolution VerticalResolution RefreshRate
---------                                               -------------------- ------------------ -----------
640 x 480 x 4294967296 colors @ 59 Hertz                                 640                480          59
640 x 480 x 4294967296 colors @ 60 Hertz                                 640                480          60
640 x 480 x 4294967296 colors @ 75 Hertz                                 640                480          75
720 x 480 x 4294967296 colors @ 60 Hertz                                 720                480          60
720 x 480 x 4294967296 colors @ 59 Hertz                                 720                480          59
720 x 576 x 4294967296 colors @ 50 Hertz (Interlaced)                    720                576          50
800 x 600 x 4294967296 colors @ 60 Hertz                                 800                600          60
800 x 600 x 4294967296 colors @ 75 Hertz                                 800                600          75
1024 x 768 x 4294967296 colors @ 60 Hertz                               1024                768          60
1024 x 768 x 4294967296 colors @ 75 Hertz                               1024                768          75
1152 x 864 x 4294967296 colors @ 75 Hertz                               1152                864          75
1176 x 664 x 4294967296 colors @ 50 Hertz (Interlaced)                  1176                664          50
1176 x 664 x 4294967296 colors @ 60 Hertz                               1176                664          60
1176 x 664 x 4294967296 colors @ 59 Hertz                               1176                664          59
1280 x 720 x 4294967296 colors @ 60 Hertz                               1280                720          60
1280 x 720 x 4294967296 colors @ 59 Hertz                               1280                720          59
1280 x 720 x 4294967296 colors @ 50 Hertz (Interlaced)                  1280                720          50
1280 x 768 x 4294967296 colors @ 60 Hertz                               1280                768          60
1280 x 768 x 4294967296 colors @ 75 Hertz                               1280                768          75
1280 x 800 x 4294967296 colors @ 60 Hertz                               1280                800          60
1280 x 800 x 4294967296 colors @ 75 Hertz                               1280                800          75
1280 x 960 x 4294967296 colors @ 60 Hertz                               1280                960          60
1280 x 960 x 4294967296 colors @ 75 Hertz                               1280                960          75
1280 x 1024 x 4294967296 colors @ 60 Hertz                              1280               1024          60
1280 x 1024 x 4294967296 colors @ 75 Hertz                              1280               1024          75
1360 x 768 x 4294967296 colors @ 60 Hertz                               1360                768          60
1360 x 768 x 4294967296 colors @ 59 Hertz                               1360                768          59
1360 x 768 x 4294967296 colors @ 50 Hertz (Interlaced)                  1360                768          50
1366 x 768 x 4294967296 colors @ 60 Hertz                               1366                768          60
1366 x 768 x 4294967296 colors @ 59 Hertz                               1366                768          59
1366 x 768 x 4294967296 colors @ 50 Hertz (Interlaced)                  1366                768          50
1600 x 900 x 4294967296 colors @ 60 Hertz                               1600                900          60
1600 x 900 x 4294967296 colors @ 59 Hertz                               1600                900          59
1600 x 900 x 4294967296 colors @ 50 Hertz (Interlaced)                  1600                900          50
1600 x 1024 x 4294967296 colors @ 60 Hertz                              1600               1024          60
1600 x 1024 x 4294967296 colors @ 59 Hertz                              1600               1024          59
1600 x 1024 x 4294967296 colors @ 50 Hertz (Interlaced)                 1600               1024          50
1680 x 1050 x 4294967296 colors @ 60 Hertz                              1680               1050          60
1680 x 1050 x 4294967296 colors @ 59 Hertz                              1680               1050          59
1680 x 1050 x 4294967296 colors @ 50 Hertz (Interlaced)                 1680               1050          50
1768 x 992 x 4294967296 colors @ 50 Hertz (Interlaced)                  1768                992          50
1768 x 992 x 4294967296 colors @ 60 Hertz                               1768                992          60
1768 x 992 x 4294967296 colors @ 59 Hertz                               1768                992          59
1920 x 1080 x 4294967296 colors @ 60 Hertz                              1920               1080          60
1920 x 1080 x 4294967296 colors @ 59 Hertz                              1920               1080          59
1920 x 1080 x 4294967296 colors @ 50 Hertz (Interlaced)                 1920               1080          50


PS C:\Users\SUDIP BHATTACHARYA> Get-CimInstance -Namespace root\cimv2 -ClassName Win32_VideoController | Select-Object C
urrentHorizontalResolution, CurrentVerticalResolution, CurrentRefreshRate

CurrentHorizontalResolution CurrentVerticalResolution CurrentRefreshRate
--------------------------- ------------------------- ------------------
                       1920                      1080                 60 -->
