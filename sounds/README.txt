Sounds for the records in the headset (src/js/xr-discs.js).
Drop .wav, .ogg, .mp3 or .m4a files in these folders; every file is used, one picked at random each time.
Restart the dev server after adding files.

  hit/     a record knocks into the table, the floor or another record (soft clacks)
           e.g. Half-Life 2: physics/glass/glass_impact_soft1-3, glass_impact_hard1-3
  break/   a record shatters
           e.g. Half-Life 2: physics/glass/glass_pottery_break1-4, glass_bottle_break1-2

The loudness follows how hard the record hit. Empty folders = silent records.

  notice/  short sounds that tell you something, heard the same in both ears (not from the table).
           Fixed names, set in xr-discs.js -> DISCS.notice:
             ShellacDeny.mp3   "don't spawn more discs": you pressed a record while the table already has five
             ShellacLaugh.mp3  easter egg: a small chance (DISCS.laugh, 6%) after a record breaks
             NoSound.wav       fallback: plays instead of any sound whose files didn't load or play
                               (never on its own)
