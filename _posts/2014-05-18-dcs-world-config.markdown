---
layout: post
title: DCS World Tweaks
categories: gaming lua
---

These are configuration file changes I use to improve DCS World.

Labels
=

The human eye has much greater resolution than the DCS World graphics engine or a desktop monitor can simulate. In the real world, one can see individual vehicles moving from an airplane window at 30,000 feet. In DCS, you're lucky if you see an object a few miles away, since it's just a few pixels on the screen. Unfortunately, the default labels go too far in the opposite direction and make the sim very easy. This modified labels config adds a gray dot to objects to make them more visible at range, without giving critical information such as weapon type or IFF.

{% highlight lua %}
--Config\View\Labels.lua
AirOn = true
GroundOn = true
NavyOn = true
WeaponOn = true

AirFormat = {}
AirFormat[2500] = "'"
AirFormat[30000] = ""

GroundFormat = {}
GroundFormat[2500] = "'"
GroundFormat[30000] = ""

NavyFormat = {}
NavyFormat[10000] = "'"
NavyFormat[30000] = ""

WeaponFormat = {}
WeaponFormat[1000] = "'"
WeaponFormat[30000] = ""

ColorAliesSide = {128, 128, 128}
ColorEnemiesSide = {128, 128, 128}
{% endhighlight %}

MFCD Views
=

If you only have a single monitor, being able to read the MFCDs can be tricky (even with a head tracker). This config puts the MFCDs displays into overlays in the corners of the monitor.

<a href="https://i.imgur.com/nXh46.jpg"><img alt="Example screenshot" height="480" src="https://i.imgur.com/nXh46.jpg" /></a>

{% highlight lua %}
--Config\MonitorSetup\CameraWithMFCDs.lua
!_  = function(p) return p; end;
name = _('Camera with MFCDs');
Description = '512x512 LFMCD and RMFCD in corners of monitor.'
Viewports =
{
     Center =
     {
          x = 0;
          y = 0;
          width = screen.width;
          height = screen.height;
          viewDx = 0;
          viewDy = 0;
          aspect = screen.aspect;
     }
}

LEFT_MFCD =
{
     x = 0;
     y = screen.height - 512;
     width = 512;
     height = 512;
}

RIGHT_MFCD =
{
     x = screen.width - 512;
     y = screen.height - 512;
     width = 512;
     height = 512;
}

UIMainView = Viewports.Center
{% endhighlight %}

A-10C CMS Programs
=

These are my personal preferences for AN/ALE40V programs. A-D are for defending/evading while under attack, E-G are for preemptive measures, and H-K are for fully manual control and signaling.

{% highlight lua %}
local gettext = require("i_18n")
_ = gettext.translate

programs = {}

-- Old generation radar SAM, Defensive
programs['A'] = {}
programs['A']["chaff"] = 2
programs['A']["flare"] = 0
programs['A']["intv"]  = 1.0
programs['A']["cycle"] = 10

-- Current generation radar SAM, Defensive
programs['B'] = {}
programs['B']["chaff"] = 4
programs['B']["flare"] = 0
programs['B']["intv"]  = 0.5
programs['B']["cycle"] = 20

-- IR SAM, Defensive
programs['C'] = {}
programs['C']["chaff"] = 0
programs['C']["flare"] = 4
programs['C']["intv"]  = 0.2
programs['C']["cycle"] = 5

-- Mix, Defensive
programs['D'] = {}
programs['D']["chaff"] = 2
programs['D']["flare"] = 2
programs['D']["intv"]  = 1.0
programs['D']["cycle"] = 10

-- Radar, Preventative
programs['E'] = {}
programs['E']["chaff"] = 2
programs['E']["flare"] = 0
programs['E']["intv"]  = 0.5
programs['E']["cycle"] = 60

-- IR, Preventative
programs['F'] = {}
programs['F']["chaff"] = 4
programs['F']["flare"] = 4
programs['F']["intv"]  = 1.0
programs['F']["cycle"] = 60

-- Mix, Preventative
programs['G'] = {}
programs['G']["chaff"] = 2
prgrams['G']["flare"] = 2
programs['G']["intv"]  = 1
programs['G']["cycle"] = 60

-- Chaff single
programs['H'] = {}
programs['H']["chaff"] = 1
programs['H']["flare"] = 0
programs['H']["intv"]  = 1.0
programs['H']["cycle"] = 1

-- Chaff pair
programs['I'] = {}
programs['I']["chaff"] = 2
programs['I']["flare"] = 0
programs['I']["intv"]  = 1.0
programs['I']["cycle"] = 1

-- Flare single
programs['J'] = {}
programs['J']["chaff"] = 0
programs['J']["flare"] = 1
programs['J']["intv"]  = 1.0
programs['J']["cycle"] = 1

-- Flare pair
programs['K'] = {}
programs['K']["chaff"] = 0
programs['K']["flare"] = 2
programs['K']["intv"]  = 1.0
programs['K']["cycle"] = 1

-- End custom programs
{% endhighlight %}

Do not modify any lines other than the CMS programs.