Sounds for the headset (src/js/knocks.js, xr-discs.js, xr-machine.js, xr-ambience.js, sdk/panels.js).
Drop .wav, .ogg, .mp3 or .m4a files in these folders; every file in impact_sounds/ and ambience/ is used, one
picked at random each time. Restart the dev server after adding files.

  impact_sounds/  everything that knocks, and a record shattering. Every thing in the room is made of a SURFACE
           (src/data/surfaces.js: wood, drywall, concrete, metal, leather, felt, straw, tile, shellac). When two
           things knock together, each plays its own surface's knock, picked here by the start of the file name:
             wood_furniture_impact_soft* / _hard*   wood: the desk, the drawers, the board, the wall's trim
             wood_box_scrape*                       wood sliding: a drawer (a loop; the first file is used)
             wood_solid_impact_soft* / _hard*       straw: the boater
             drywall_impact_soft* / _hard*          drywall: the wallpapered wall
             concrete_impact_soft* / _hard*         concrete: the broken patches of the wall
             metal_solid_impact_soft* / _hard*      metal: the crank
             metal_computer_impact_soft* / _hard*   victor: the talking machine's case and lid
             leather_impact_soft* / _hard*          leather: nothing is tagged leather now (none yet: sounds like wood)
             felt_impact*                           felt: the board's felt, the platter (none yet: soft wood)
             tile_impact_soft* / _hard*             tile: the hall's floor (none yet: silent)
             *break* (ShellacBreak*)                a record shatters (xr-discs.js DISCS.breaks)
             anything else                          shellac: a record (soft clacks, e.g. ShellacPlace*)
           _hard files play for knocks over 25 N (HARD in surfaces.js); without them the _soft ones do.
           The loudness follows how hard the thing hit.
           (files with "wind", "ambience", "loop" or "break" in their names are never record knocks)

  ambience/  the headset's ambience (src/js/xr-ambience.js), matched by name:
             *wind*    a soft loop all around you, VR only (it may also sit in impact_sounds/)
             *void*    now and then one swells far off in the dark, VR only
             *clock*   a grandfather clock ticking by the wall, once the room is there

  ui_sounds/  the interface's sounds and the Victor's, by fixed names. Every file here is also listed in the
           debug menu's sound test (src/js/sdk/menus.js).
             ShellacDeny.mp3     "no more records": you took a record while five are already out (DISCS.notice; at
                                 most once a second)
             ShellacLaugh.mp3    easter egg: a small chance (DISCS.laugh, 6%) after a dropped record breaks
             NoSound.wav         a record with no sound, once when you play it; and the fallback for any sound
                                 whose files didn't load or play
             hud_select.wav, hud_hudoff.wav, buttonclick.wav, buttonrollover.wav   the panels opening and
                                 closing, a tap, a button appearing (sdk/panels.js SOUND)
             display_notice.wav  a greeting card appearing (sdk/greeting.js)
             crank_wind.wav      the Crank sliding into the Crank tube, and every quarter turn it's wound
                                 (xr-machine.js MACHINE.sounds)
             victor_hinge.wav    the Lid starting to open, and to close, at 15% loudness (xr-machine.js MACHINE.sounds)
             (not used now: buttonclickrelease, crank_click, hint, hud_denyselect, hud_moveselect, showdetails,
             warning)
