/**
 * An array of status effect icons which can be applied to Tokens
 * @type {Array}
 */
CONFIG.statusEffects = [
  "modules/conditions5e/icons/dead.svg",
  "modules/conditions5e/icons/unconscious.svg",
  "modules/conditions5e/icons/stunned.svg",
  "modules/conditions5e/icons/exhaustion1.svg",

  "modules/conditions5e/icons/incapacitated.svg",
  "modules/conditions5e/icons/paralyzed.svg",
  "modules/conditions5e/icons/petrified.svg",
  "modules/conditions5e/icons/exhaustion2.svg",

  "modules/conditions5e/icons/grappled.svg",
  "modules/conditions5e/icons/restrained.svg",
  "modules/conditions5e/icons/prone.svg",
  "modules/conditions5e/icons/exhaustion3.svg",

  "modules/conditions5e/icons/charmed.svg",
  "modules/conditions5e/icons/frightened.svg",
  "modules/conditions5e/icons/poisoned.svg",
  "modules/conditions5e/icons/exhaustion4.svg",

  "modules/conditions5e/icons/blinded.svg",
  "modules/conditions5e/icons/deafened.svg",
  "modules/conditions5e/icons/diseased.svg",
  "modules/conditions5e/icons/exhaustion5.svg",

  "modules/conditions5e/icons/concentrating.svg",
  "modules/conditions5e/icons/inspiration.svg",
  "icons/svg/sleep.svg",
  "icons/svg/angel.svg",
  
  "icons/svg/mage-shield.svg",
  "icons/svg/holy-shield.svg",
  "icons/svg/upgrade.svg",
  "icons/svg/downgrade.svg",
  
  "icons/svg/target.svg",
  "icons/svg/eye.svg",
  "icons/svg/silenced.svg",
  "icons/svg/wing.svg"
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
