var phrases = [
    "..disk or the processor is on fire",
    "/dev/clue was linked to /dev/null",
    "/pub/lunch",
    "50% of the manual is in .PDF readme files",
    "A plumber is needed, the network drain is clogged",
    "ATM cell has no roaming feature turned on, notebooks can't connect",
    "According to Microsoft, it's by design",
    "All of the packets are empty",
    "Appears to be a Slow/Narrow SCSI-0 Interface problem",
    "Arcserve crashed the server again",
    "Astropneumatic oscillations in the water-cooling",
    "Asynchronous inode failure",
    "BNC (brain not connected)",
    "Backbone Scoliosis",
    "Backbone adjustment",
    "Backup tape overwritten with copy of system manager's favourite EP",
    "Bad ether in the cables",
    "Bad user karma",
    "Bank holiday - system operating credits  not recharged",
    "Because of network lag due to too many people playing deathmatch",
    "Big to little endian conversion error",
    "Bit bucket overflow",
    "Bit rot",
    "Bogon emissions",
    "Boredom in the Kernel",
    "Borg implants are failing",
    "Borg nanites have infested the server",
    "Boss forgot system password",
    "Broadcast packets on wrong frequency",
    "Browser's cookie is corrupted -- someone's been nibbling on it",
    "Budget cuts forced us to sell all the power cords for the servers",
    "Budget cuts",
    "Bugs in the RAID",
    "CD-ROM server needs recalibration",
    "CPU needs bearings repacked",
    "CPU needs recalibration",
    "CPU radiator broken",
    "CPU-angle has to be adjusted because of vibrations coming from the nearby road",
    "Cache miss - please take better aim next time",
    "Cellular telephone interference",
    "Change in Earth's rotational speed",
    "Change your language to Finnish",
    "Chewing gum on /dev/sd3c",
    "Clock speed",
    "Collapsed Backbone",
    "Communications satellite used by the military for star wars",
    "Complete Transient Lockout",
    "Computers under water due to SYN flooding",
    "Cosmic ray particles crashed through the hard disk platter",
    "Cow-tippers tipped a cow onto the server",
    "Crop circles in the corn shell",
    "DNS server drank too much and had a hiccup",
    "Daemon escaped from pentagram",
    "Daemons loose in system",
    "Data for intranet got routed through the extranet and landed on the internet",
    "Decreasing electron flux",
    "Defunct processes",
    "Descramble code needed from software company",
    "Dew on the telephone lines",
    "Did you pay the new Support Fee?",
    "Digital Manipulator exceeding velocity parameters",
    "Disks spinning backwards - toggle the hemisphere jumper",
    "Divide-by-zero error",
    "Domain controller not responding",
    "Don't worry; it's been deprecated. The new one is worse",
    "Doppler effect",
    "Dry joints on cable plug",
    "Due to the CDA, we no longer have a root account",
    "Dumb terminal",
    "Dynamic software linking table corrupted",
    "Dyslexics retyping hosts file on servers",
    "Electrical conduits in machine room are melting",
    "Electricians made popcorn in the power supply",
    "Electro-magnetic pulses from French above ground nuke testing",
    "Electromagnetic energy loss",
    "Electromagnetic radiation from satellite debris",
    "Electrons on a bender",
    "Emissions from GSM-phones",
    "Endothermal recalibration",
    "Error: one bad user found in front of screen",
    "Ether leak",
    "Evil dogs hypnotised the night shift",
    "Evil hackers from Serbia",
    "Excess condensation in cloud network",
    "Excess surge protection",
    "Excessive collisions & not enough packet ambulances",
    "Failed trials, system needs redesigned",
    "Failure to adjust for daylight savings time",
    "Fanout dropping voltage too much, try cutting some of those little traces",
    "Fat electrons in the lines",
    "Fatal error right in front of screen",
    "Feature not yet implemented",
    "Feature was not beta tested",
    "Fiber optics caused gas main leak",
    "Filesystem not big enough for Jumbo Kernel Patch",
    "Firewall is on fire...",
    "Firewall needs cooling",
    "Firmware update in the coffee machine",
    "First Saturday after first full moon in Winter",
    "Flat tire on station wagon with tapes",
    "Floating point processor overflow",
    "Fluorescent lights are generating negative ions. If turning them off doesn't work, take them out and put tin foil on the ends",
    "Forced to support NT servers; sysadmins quit",
    "Forklist drove over the CPU board",
    "Fractal radiation jamming the backbone",
    "Global warming",
    "Greenpeace free'd the mallocs",
    "Groundskeepers stole the root password",
    "HCF instruction issued",
    "HTTP 418",
    "HTTP 451",
    "HTTPD Error 4004 : very old Intel cpu - insufficient processing power",
    "Had to use hammer to free stuck disk drive heads",
    "Halon system went off and killed the operators",
    "Hard drive sleeping. Let it wake up on it's own..",
    "Hardware stress fractures",
    "Hash table has termites",
    "Have you tried turning it off and on again?",
    "Having to manually track the satellite",
    "Heavy gravity fluctuation, move computer to floor rapidly",
    "High altitude condensation from U.S.A.F prototype aircraft has contaminated the primary subnet mask. Turn off your computer for 9 days to avoid damaging it",
    "High line impedance",
    "High nuclear activity in your area",
    "High pressure system failure",
    "Hot Java has gone cold",
    "I'd love to help you -- it's just that the Boss won't let me near the computer. ",
    "I'm not sure.  Try calling the Internet's head office -- it's in the book",
    "I'm sorry a pentium won't do, you need an SGI to connect with us",
    "IRQ dropout",
    "IRQ-problems with the Un-Interruptible-Power-Supply",
    "Improperly oriented keyboard",
    "Incompatible bit-registration operators",
    "Incorrect time synchronization",
    "Incorrectly configured static routes on the corerouters",
    "Increased sunspot activity",
    "Insert coin for new game",
    "Interference between the keyboard and the chair",
    "Interference from lunar radiation",
    "Interference from the Van Allen Belt",
    "Internet exceeded maximum users, please wait until a user logs off before attempting to log back on",
    "Internet is needed to catch the etherbunny",
    "Internet outage",
    "Internet shut down due to maintenance",
    "Interrupt configuration error",
    "Ionization from the air-conditioning",
    "It has Intel Inside",
    "It is a layer 8 problem",
    "It must have been the recent lightning storm",
    "It was OK before you touched it",
    "It's an ID-10-T error",
    "It's not RFC-822 compliant",
    "It's not plugged in",
    "It's stuck in the Web",
    "It's the InterNIC's fault",
    "Jupiter is aligned with Mars",
    "Just type 'mv * /dev/null'",
    "Kernel panic: write-only-memory (/dev/wom0) capacity exceeded",
    "Keyboard Actuator Failure.  Order and Replace",
    "Knot in cables caused data stream to become twisted and kinked",
    "Lacks RFC-1149 Compliance",
    "Lawn mower blade in your fan need sharpening",
    "Le0: no carrier: transceiver cable problem?",
    "Leap second overloaded RHEL6 servers",
    "Lightning strikes",
    "Little hamster in running wheel had coronary; waiting for replacement to be Fedexed from Wyoming",
    "Look, buddy:  Windows 3.1 IS A General Protection Fault",
    "Loop found in loop in redundant loopback",
    "Magnetic interference from money/credit cards",
    "Mail server hit by UniSpammer",
    "Mailer-daemon is busy burning your message in hell",
    "Maintenance window broken",
    "Manager in the cable duct",
    "Melting hard drives",
    "Microelectronic Riemannian curved-space fault in write-only file system",
    "Monitor VLF leakage",
    "Monitor resolution too high",
    "Mouse chewed through power cable",
    "Mouse has out-of-cheese-error",
    "Multicasts on broken packets",
    "My pony-tail hit the on/off switch on the power strip",
    "NOTICE: alloc: /dev/null: filesystem full",
    "Need to wrap system in aluminum foil to fix problem",
    "Nesting roaches shorted out the ether cable",
    "Netscape has crashed",
    "Network down, IP packets delivered via UPS",
    "Network failure -  call NBC",
    "Network packets travelling uphill (use a carrier pigeon)",
    "Neutrino overload on the nameserver",
    "New guy cross-connected phone lines with ac power bus",
    "New management",
    "No any key on keyboard",
    "Non-redundant fan failure ",
    "Not approved by the FCC",
    "Not enough interrupts",
    "Not enough memory, go get system upgrade",
    "Not properly grounded, please bury computer",
    "OS swapped to disk",
    "Of course it doesn't work. We've performed a software upgrade",
    "Old inkjet cartridges emanate barium-based fumes",
    "Only available on a need to know basis",
    "Operation failed because: there is no message for this error (#1014)",
    "Operators killed by year 2000 bug bite",
    "Operators killed when huge stack of backup tapes fell over",
    "Operators on strike due to broken coffee machine",
    "Our ISP is having SMDS problems",
    "Our ISP is having frame relay problems",
    "Our ISP is having routing problems",
    "Our ISP is having switching problems",
    "Our POP server was kidnapped by a weasel",
    "Out of cards on drive D:",
    "Overflow error in /dev/null",
    "PCMCIA slave driver",
    "PEBKAC (Problem Exists Between Keyboard And Chair)",
    "POSIX compliance problem",
    "Packet held up at customs",
    "Packets are sad - RFC 5841",
    "Paradigm shift...without a clutch",
    "Parallel processors running perpendicular today",
    "Party-bug in the Aloha protocol",
    "Password is too complex to decrypt",
    "Pentium FDIV bug",
    "Piezo-electric interference",
    "Pirated copies of Ubuntu",
    "Plasma conduit breach",
    "Plate voltage too low on demodulator tube",
    "Please excuse me, I have to circuit an AC line through my head to get this database working",
    "Please state the nature of the technical emergency",
    "Plumber mistook routing panel for decorative wall fixture",
    "Police are examining all internet packets in the search for a narco-net-trafficker",
    "Poor power conditioning",
    "Popper unable to process jumbo kernel",
    "Positron router malfunction",
    "Post-it Note Sludge leaked into the monitor",
    "Power Company having EMP problems with their reactor",
    "Power company testing new voltage spike equipment",
    "Power surges on the Underground",
    "Processes running slowly due to weak power supply",
    "Program load too heavy for processor to lift",
    "Project manager plugged hairdryer into UPS",
    "Propagation delay",
    "Proprietary Information",
    "Pseudo-user on a pseudo-terminal",
    "Quantum decoherence",
    "Quantum dynamics are affecting the transistors",
    "RPC_PMAP_FAILURE",
    "RSA keys fell down sewer",
    "Radial Telemetry Infiltration",
    "Radiosity depletion",
    "Rampancy",
    "Recursive traversal of loopback mount points",
    "Recursivity.  Call back if it happens again",
    "Redundant ACLs. ",
    "Reformatting Page. Wait..",
    "Repeated reboots of the system failed to solve problem",
    "Rhythmic variations in the voltage reaching the power supply",
    "Robotic tape changer mistook operator's tie for a backup tape",
    "Root name servers corrupted",
    "Root nameservers are out of sync",
    "Root rot",
    "Route flapping at the NAP",
    "Routing problems on the neural net",
    "Runaway cat on system",
    "Runt packets",
    "SCSI Chain overterminated",
    "SCSI's too wide",
    "SIMM crosstalk",
    "Sales staff sold a product we don't offer",
    "Sand fleas eating the Internet cables",
    "Scheduled global CPU outage",
    "Second-system effect",
    "Server depressed, needs Prozac",
    "Short leg on process table",
    "Small animal kamikaze attack on power supplies",
    "Smell from unhygienic janitorial staff wrecked the tape heads",
    "Software uses US measurements, but the OS is in metric..",
    "Solar flares",
    "Some one needed the powerstrip, so they pulled the switch plug",
    "Somebody ran the operating system through a spelling checker",
    "Somebody sent chain letter to all 5000 employees",
    "Somebody was calculating pi on the server",
    "Someone else stole your IP address, call the Internet detectives!",
    "Someone has messed up the kernel pointers",
    "Someone hooked the twisted pair wires into the answering machine",
    "Someone is standing on the ethernet cable, causing a kink in the cable",
    "Someone set us up the bomb",
    "Someone thought The Big Red Button was a light switch",
    "Someone was smoking in the computer room and set off the halon systems",
    "Someone's tie is caught in the printer, and if anything else gets printed, he'll be in it too",
    "Sounds like a Windows problem, try calling Microsoft support",
    "Spaghetti cable caused packet failure",
    "Stale file handle (next time use Tupperware(tm)!)",
    "Static buildup",
    "Static from nylon underwear",
    "Static from plastic slide rules",
    "Sticktion",
    "Sticky bit has come loose",
    "Sticky bits on disk",
    "Stop bit received",
    "Stray Alpha Particles from memory packaging caused Hard Memory Error on Server",
    "Struck by the Good Times virus",
    "Stubborn processes",
    "Suboptimal routing experience",
    "Support staff hung over, send aspirin and come back LATER",
    "Suspicious pointer corrupted virtual machine",
    "Sysadmin accidentally destroyed pager with a large hammer",
    "Sysadmin didn't hear pager go off due to loud music from bar-room speakers",
    "Sysadmins busy fighting SPAM",
    "Sysadmins unavailable because they are in a meeting talking about why they are unavailable so much",
    "System consumed all the paper for paging",
    "System has been recalled",
    "System needs to be rebooted",
    "TCP/IP UDP alarm threshold is set too low",
    "TNETENNBA",
    "Tachyon emissions overloading the system",
    "Techtonic stress",
    "Telecommunications is downgrading",
    "Telecommunications is downshifting",
    "Telecommunications is upgrading. ",
    "Temporal anomaly",
    "Temporary routing anomaly",
    "That would be because the software doesn't work",
    "That's a great computer you have there; have you considered how it would work as a BSD machine?",
    "The AA battery in the wallclock sends magnetic interference",
    "The ATM board has run out of 10 pound notes.  We are having a whip round to refill it, care to contribute ?",
    "The Borg tried to assimilate your system. Resistance is futile",
    "The CPU has shifted, and become decentralized",
    "The Dilithium Crystals need to be rotated",
    "The Internet is being scanned for viruses",
    "The POP server is out of Coke",
    "The Token fell out of the ring. Call us when you find it",
    "The UPS doesn't have a battery backup",
    "The UPS is on strike",
    "The air conditioning water supply pipe ruptured over the machine room",
    "The butane lighter causes the pincushioning",
    "The cables are not the same length",
    "The co-locator cannot verify the frame-relay gateway to the ISDN server",
    "The computer has suffered a memory leak, and we are waiting for it to be topped up",
    "The cord jumped over and hit the power switch",
    "The curls in your keyboard cord are losing electricity",
    "The daemons! the daemons! the terrible daemons!",
    "The data on your hard drive is out of balance",
    "The electricity substation in the car park blew up",
    "The file system is full of it",
    "The hardware bus needs a new token",
    "The kernel license has expired",
    "The keyboard isn't plugged in",
    "The lines are all busy",
    "The mainframe needs to rest.  It's getting old, you know",
    "The math co-processor had an overflow error that leaked out and shorted the RAM",
    "The monitor is plugged into the serial port",
    "The monitor needs another box of pixels",
    "The mouse escaped",
    "The new frame relay network hasn't bedded down the software loop transmitter yet. ",
    "The printer thinks its a router",
    "The real ttys became pseudo ttys and vice-versa",
    "The recent proliferation of Nuclear Testing",
    "The ring needs another token",
    "The rolling stones concert down the road caused a brown out",
    "The router thinks its a printer",
    "The rubber band broke",
    "The static electricity routing is acting up..",
    "The vendor put the bug there",
    "The vulcan-death-grip ping has been applied",
    "The xy axis in the trackball is coordinated with the summer solstice",
    "There isn't any problem",
    "Those damn raccoons!",
    "Too few computrons available",
    "Too many interrupts",
    "Too many little pins on CPU confusing it, bend back and forth until 10-20% are neatly removed. Do _not_ leave metal bits visible!",
    "Too much radiation coming from the soil",
    "Traceroute says that there is a routing problem in the backbone.  It's not our problem",
    "Traffic jam on the Information Superhighway",
    "Transient bus protocol violation",
    "Trojan horse ran out of hay",
    "Turns out velociraptors know Unix",
    "Typo in the code",
    "UPS interrupted the server's power",
    "Unfortunately we have run out of bits. Don't worry, the next shipment will be coming next week",
    "Unoptimized hard drive",
    "User error",
    "User to computer ratio too high",
    "User to computer ratio too low",
    "Users learning curve appears to be fractal",
    "Vapors from evaporating sticky-note adhesives",
    "Vendor no longer supports the product",
    "Vi needs to be upgraded to vii",
    "Violation of first law of robotics",
    "Violation of second law of robotics",
    "Violation of third law of robotics",
    "Violation of zeroth law of robotics",
    "Virus transmitted from computer to sysadmins",
    "Waste water tank overflowed onto computer",
    "We already sent around a notice about that",
    "We are a 100% Microsoft Shop",
    "We are currently trying a new concept of using a live mouse.  Unfortunately, one has yet to survive being hooked up to the computer.....please bear with us",
    "We are running Gentoo in production",
    "We didn't pay the Internet bill and it's been cut off",
    "We dun goofed",
    "We had to turn off that service to comply with the CDA Bill",
    "We just switched to FDDI",
    "We just switched to Sprint",
    "We need a licensed electrician to replace the light bulbs in the computer room",
    "We only support a 1200 bps connection",
    "We only support a 28000 bps connection",
    "We ran out of dial tone and we're and waiting for the phone company to deliver another bottle",
    "We'll fix that in the next release",
    "We're on Token Ring, and it looks like the token got loose",
    "We're out of slots on the server",
    "We're upgrading /dev/null",
    "We're waiting for CenturyLink to fix that line",
    "We're waiting for Comcast to fix that line",
    "We've been reported to cyber police",
    "We've picked COBOL as the language of choice",
    "We've run out of licenses",
    "Webmasters kidnapped by evil cult",
    "What you are experiencing is not a problem; it is an undocumented feature",
    "Windows 95 undocumented 'feature'",
    "Working as designed",
    "Write-only-memory subsystem too slow for this machine. Contact your local dealer",
    "Wrong polarity of neutron flow",
    "YOU HAVE AN I/O ERROR -> Incompetent Operator error",
    "Yes, yes, its called a design limitation",
    "You must've hit the wrong any key",
    "You need to install an RTFM interface",
    "You need to upgrade your VESA local bus to a MasterCard local bus",
    "You put the disk in upside down",
    "You're out of memory",
    "You've been infected by the Telescoping Hubble virus",
    "Your EMAIL is now being delivered by the USPS",
    "Your Flux Capacitor has gone bad",
    "Your Pentium has a heating problem - try cooling it with ice cold water.",
    "Your cat tried to eat the mouse",
    "Your computer hasn't been returning all the bits it gets from the Internet",
    "Your computer's contract is set to expire at midnight",
    "Your keyboard's space bar is generating spurious keycodes",
    "Your packets were eaten by the terminator",
    "Your parity check is overdrawn and you're out of cache",
    "Your process is not ISO 9000 compliant",
    "Your processor does not develop enough heat",
    "Your processor has processed too many instructions.  Turn it off immediately, do not type any commands!!",
    "Your processor has taken a ride to Heaven's Gate on the UFO behind Hale-Bopp's comet",
    "Zombie processes detected, machine is haunted",
    "Zombie processes haunting the computer",
    "_Rosin_ core solder? But..",
    "lp0 on fire",
];

var lunchPhrases = [
    "Operators out to lunch",
    "Technicians consuming nutrients",
];

function getRandomPhrase(phraseList) {
    var randomPhraseIndex = Math.round(Math.random() * (phraseList.length - 1));
    return phraseList[randomPhraseIndex]
}


phrase = "Excuse generator broken"
if (new Date().getHours() === 12)
    phrase = getRandomPhrase(lunchPhrases)
else
    phrase = getRandomPhrase(phrases)

var excuse = document.getElementById("excuse");
excuse.textContent = phrase
