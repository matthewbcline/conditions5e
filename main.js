/**
 * An array of status effect icons which can be applied to Tokens
 * @type {Array}
 */
CONFIG.statusEffects = [
    {
      id: "dead",
      label: "Dead",
      icon: "modules/conditions5e/icons/dead.svg"
    },
    {
      id: "unconscious",
      label: "Unconscious",
      icon: "modules/conditions5e/icons/unconscious.svg"
    },
    {
      id: "stun",
      label: "Stunned",
      icon: "modules/conditions5e/icons/stunned.svg"
    },
    {
      id: "exhaustion1",
      label: "Exhausted (1)",
      icon: "modules/conditions5e/icons/exhaustion1.svg"
    },
    {
      id: "incapacitated",
      label: "Incapacitated",
      icon: "modules/conditions5e/icons/incapacitated.svg"
    },
    {
      id: "paralysis",
      label: "Paralyzed",
      icon: "modules/conditions5e/icons/paralyzed.svg",
    },
    {
      id: "petrified",
      label: "Petrified",
      icon: "modules/conditions5e/icons/petrified.svg",
    },
    {
      id: "exhaustion2",
      label: "Exhausted (2)",
      icon: "modules/conditions5e/icons/exhaustion2.svg"
    },
    {
      id: "grappled",
      label: "Grappled",
      icon: "modules/conditions5e/icons/grappled.svg",
    },
    {
      id: "restrain",
      label: "Restrained",
      icon: "modules/conditions5e/icons/restrained.svg",
    },
    {
      id: "prone",
      label: "Prone",
      icon: "modules/conditions5e/icons/prone.svg"
    },
    {
      id: "exhaustion3",
      label: "Exhausted (3)",
      icon: "modules/conditions5e/icons/exhaustion3.svg"
    },
    {
      id: "charmed",
      label: "Charmed",
      icon: "modules/conditions5e/icons/charmed.svg"
    },
    {
      id: "fear",
      label: "Frightened",
      icon: "modules/conditions5e/icons/frightened.svg"
    },
    {
      id: "poison",
      label: "Poisoned",
      icon: "modules/conditions5e/icons/poisoned.svg"
    },
    {
      id: "exhaustion4",
      label: "Exhausted (4)",
      icon: "modules/conditions5e/icons/exhaustion4.svg"
    },
    {
      id: "blind",
      label: "Blinded",
      icon: "modules/conditions5e/icons/blinded.svg"
    },
    {
      id: "deaf",
      label: "Deafened",
      icon: "modules/conditions5e/icons/deafened.svg"
    },
    {
      id: "disease",
      label: "Diseased",
      icon: "modules/conditions5e/icons/diseased.svg"
    },
    {
      id: "exhaustion5",
      label: "Exhausted (5)",
      icon: "modules/conditions5e/icons/exhaustion5.svg"
    },

    {
      id: "concentrating",
      label: "Concentrating",
      icon: "modules/conditions5e/icons/concentrating(2).svg"
    },
    {
      id: "inspired",
      label: "Bardic Inspiration",
      icon: "modules/conditions5e/icons/musical-notes.svg"
    },
    {
      id: "asleep",
      label: "Asleep",
      icon: "icons/svg/sleep.svg"
    },
    {
      id: "blessed",
      label: "Blessed",
      icon: "icons/svg/angel.svg"
    },
  
    {
      id: "mage-shield",
      label: "Shielded (Mage)",
      icon: "icons/svg/mage-shield.svg"
    },
    {
      id: "holy-shield",
      label: "Shielded (Holy)",
      icon: "icons/svg/holy-shield.svg"
    },
    {
      id: "empowered",
      label: "Empowered",
      icon: "icons/svg/upgrade.svg"
    },
    {
      id: "depowered",
      label: "Depowered",
      icon: "icons/svg/downgrade.svg"
    },

    {
      id: "targeted",
      label: "Targeted",
      icon: "icons/svg/target.svg"
    },
    {
      id: "eye",
      label: "Marked",
      icon: "icons/svg/eye.svg"
    },
    {
      id: "silenced",
      label: "Silenced",
      icon: "icons/svg/silenced.svg"
    },
    {
      id: "wing",
      label: "Flying",
      icon: "icons/svg/wing.svg"
    },
    
    {
      id: "dodging",
      label: "Dodging",
      icon: "icons/svg/dodging.svg"
    },
    {
      id: "hasted",
      label: "Hasted",
      icon: "icons/svg/haste.svg"
    },
];
  
// Condition Types
CONFIG.conditionTypes = {
  "blinded": "Blinded",
  "charmed": "Charmed",
  "dead": "Dead",
  "deafened": "Deafened",
  "diseased": "Diseased",
  "exhaustion": "Exhaustion",
  "exhaustion1": "Exhaustion Level 1",
  "exhaustion2": "Exhaustion Level 2",
  "exhaustion3": "Exhaustion Level 3",
  "exhaustion4": "Exhaustion Level 4",
  "exhaustion5": "Exhaustion Level 5",
  "frightened": "Frightened",
  "grappled": "Grappled",
  "incapacitated": "Inacapacitated",
  "invisible": "Invisible",
  "paralyzed": "Paralyzed",
  "petrified": "Petrified",
  "poisoned": "Poisoned",
  "prone": "Prone",
  "restrained": "Restrained",
  "stunned": "Stunned",
  "unconscious": "Unconscious",
  "wounded": "Wounded",
  "concentrating": "Concentrating",
  "inspiration": "Inspired",
  "sleep": "Asleep",
  "angel": "Blessed",
  "mage-shield.svg": "Shielded",
  "holy-shield.svg": "Holy Shield",
  "upgrade.svg": "Empowered",
  "downgrade.svg": "Depowered",
  
  "target.svg": "Targeted",
  "eye.svg": "Marked",
  "silenced.svg": "Silenced",
  "wing.svg": "Flying"
};

// Replace selected control icons
CONFIG.controlIcons.visibility = "modules/conditions5e/icons/invisible.svg";
CONFIG.controlIcons.defeated = "modules/conditions5e/icons/dead.svg";

/*

// Patch CombatTracker to work with token HUD overlay
Hooks.once("ready", function() {
  let newClass = CombatTracker;
  newClass = trPatchLib.patchMethod(newClass, "_onCombatantControl", 21,
    `if ( isDefeated && !token.data.overlayEffect ) token.toggleOverlay(CONFIG.controlIcons.defeated);`,
    `if ( isDefeated && token.data.overlayEffect !== CONFIG.controlIcons.defeated ) token.toggleOverlay(CONFIG.controlIcons.defeated);`);
  if (!newClass) return;
  CombatTracker.prototype._onCombatantControl = newClass.prototype._onCombatantControl;
});

// Function to use token overlay to show status as wounded, unconscious, or dead
Token.prototype._updateHealthOverlay = function(tok) {
  let maxHP = tok.actor.data.data.attributes.hp.max;
  let curHP = tok.actor.data.data.attributes.hp.value;
  let priorHealth = tok.data.overlayEffect;
  let newHealth = null;
  if ( curHP <= 0 ) {
    if ( priorHealth === "modules/conditions5e/icons/dead.svg" ) newHealth = priorHealth;
    else newHealth = "modules/conditions5e/icons/almostdead.svg";
  }
  else if ( curHP / maxHP < 0.5 ) newHealth = "modules/conditions5e/icons/wounded.svg";
  if ( newHealth !== priorHealth ) {
    if ( newHealth === null ) tok.toggleOverlay(priorHealth);
    else tok.toggleOverlay(newHealth);
  }
};

// This hook is required for Tokens NOT linked to an Actor
Hooks.on("updateToken", (scene, sceneID, update, tokenData, userId) => {
  let token = canvas.tokens.get(update._id);
  if (token.owner) token._updateHealthOverlay(token);
});

// This hook is required for Tokens linked to an Actor
Hooks.on("updateActor", (entity, updated) => {
  if (entity.owner) entity.getActiveTokens(true).map(x => x._updateHealthOverlay(x));
});
*/
