const mongoose = require("mongoose")

// mongoose.connect("mongodb://localhost/myDatabase", { useNewUrlParser: true, useUnifiedTopology: true })

const adminSchema = mongoose.Schema({
    fullname: {
        type: String,
        minLength: 3,
        trim: true,
        required: true
    },
    email: String,
    password: String,
    products:{
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "Product"
        type: Array,
        default: []
    },
    picture: String,
    gstin: String
},{
    timestamps: true
})

module.exports = mongoose.model("Admin", adminSchema)

/*

PS C:\Users\SUDIP BHATTACHARYA> Get-CimInstance -ClassName Win32_Processor | Select-Object Name, NumberOfCores, NumberOf
LogicalProcessors, MaxClockSpeed

Name                                    NumberOfCores NumberOfLogicalProcessors MaxClockSpeed
----                                    ------------- ------------------------- -------------
Intel(R) Pentium(R) CPU G3258 @ 3.20GHz             2                         2          3201


PS C:\Users\SUDIP BHATTACHARYA> Get-CimInstance -Namespace root\wmi -ClassName WmiMonitorID | ForEach-Object { [System.T
ext.Encoding]::ASCII.GetString($_.UserFriendlyName) }
DELL S2240L
PS C:\Users\SUDIP BHATTACHARYA> Get-PhysicalDisk | Select-Object DeviceID, MediaType, OperationalStatus, Size

DeviceID MediaType   OperationalStatus         Size
-------- ---------   -----------------         ----
0        SSD         OK                128035676160
2        Unspecified OK                 15518924800
1        SSD         OK                120034123776


PS C:\Users\SUDIP BHATTACHARYA> Get-WmiObject -Class Win32_DiskDrive | Select-Object Model, InterfaceType, Partitions, S
ize, Status


Model         : Sony Storage Media USB Device
InterfaceType : USB
Partitions    : 1
Size          : 15512878080
Status        : OK

Model         : Samsung SSD 850 EVO 120GB
InterfaceType : IDE
Partitions    : 1
Size          : 120031511040
Status        : OK

Model         : TS128GSSD370S
InterfaceType : IDE
Partitions    : 3
Size          : 128034708480
Status        : OK

PS C:\Users\SUDIP BHATTACHARYA> Get-WmiObject -Class Win32_PerfFormattedData_PerfDisk_LogicalDisk | Select-Object Name,
DiskReadBytesPerSec, DiskWriteBytesPerSec

Name            DiskReadBytesPerSec DiskWriteBytesPerSec
----            ------------------- --------------------
_Total                            0               358796
C:                                0               358796
D:                                0                    0
E:                                0                    0
HarddiskVolume1                   0                    0

*/