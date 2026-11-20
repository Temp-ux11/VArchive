Sounds for the records in the headset (src/js/xr-discs.js).
Drop .wav, .ogg, .mp3 or .m4a files in these folders; every file is used, one picked at random each time.
Restart the dev server after adding files.

  hit/     everything that knocks. Every thing in the room is made of a SURFACE (src/data/surfaces.js:
           wood, drywall, concrete, metal, leather, felt, straw, tile, shellac). When two things knock
           together, each plays its own surface's knock, picked here by the start of the file name:
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
             anything else                          shellac: a record (soft clacks, e.g. ShellacPlace*)
           _hard files play for knocks over 25 N (HARD in surfaces.js); without them the _soft ones do.
           (files with "wind", "ambience" or "loop" in their names are never record knocks)
  ambience/  the headset's ambience (src/js/xr-ambience.js), matched by name:
             *wind*    a soft loop all around you, VR only (it may also sit in hit/)
             *void*    now and then one swells far off in the dark, VR only
             *clock*   a grandfather clock ticking by the wall, once the room is there
  break/   a record shatters
           e.g. Half-Life 2: physics/glass/glass_pottery_break1-4, glass_bottle_break1-2

The loudness follows how hard the record hit. Empty folders = silent records.

  notice/  short sounds that tell you something, heard the same in both ears (not from the table).
           Fixed names, set in xr-discs.js -> DISCS.notice:
             ShellacDeny.mp3   "don't spawn more discs": you pressed a record while the table already has five
             ShellacLaugh.mp3  easter egg: a small chance (DISCS.laugh, 6%) after a record breaks
             NoSound.wav       fallback: plays instead of any sound whose files didn't load or play
                               (never on its own)
