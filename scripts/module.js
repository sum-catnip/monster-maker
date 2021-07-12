// i think root index should be level
// im not sure about the inner indexes
// when loading this sheet we have the ability score and the level
// when changinc the scale we have the level and scaler

const tables = {
  'abilities': [
    [-5,0,2,3,4],
    [-5,1,3,4,5],
    [-5,1,3,4,5],
    [-5,1,3,4,5],
    [-5,2,3,5,6],
    [-5,2,4,5,6],
    [-5,2,4,5,7],
    [-5,2,4,6,7],
    [-5,3,4,6,7],
    [-5,3,4,6,7],
    [-5,3,5,7,8],
    [-5,3,5,7,8],
    [-5,4,5,7,8],
    [-5,4,5,8,9],
    [-5,4,5,8,9],
    [-5,4,6,8,9],
    [-5,5,6,9,10],
    [-5,5,6,9,10],
    [-5,5,6,9,10],
    [-5,5,6,10,11],
    [-5,6,7,10,11],
    [-5,6,7,10,11],
    [-5,6,8,10,11],
    [-5,6,8,10,11],
    [-5,7,9,12,13]
  ],
  'perception': [
    [1,3,6,9,10],
    [2,4,7,10,11],
    [3,5,8,11,12],
    [4,6,9,12,14],
    [6,8,11,14,15],
    [7,9,12,15,17],
    [8,11,14,17,18],
    [10,12,15,18,20],
    [11,13,16,19,21],
    [12,15,18,21,23],
    [14,16,19,22,24],
    [15,18,21,24,26],
    [16,19,22,25,27],
    [18,20,23,26,29],
    [19,22,25,28,30],
    [20,23,26,29,32],
    [22,25,28,30,33],
    [23,26,29,32,35],
    [24,27,30,33,36],
    [26,29,32,35,38],
    [27,30,33,36,39],
    [28,32,35,38,41],
    [30,33,36,39,43],
    [31,34,37,40,44],
    [32,36,38,42,46]
  ],
  'saving_throws': [
    [0,2,5,8,9],
    [1,3,6,9,10],
    [2,4,7,10,11],
    [3,5,8,11,12],
    [4,6,9,12,14],
    [6,8,11,14,15],
    [7,9,12,15,17],
    [8,11,14,17,18],
    [10,12,15,18,20],
    [11,13,16,19,21],
    [12,15,18,21,23],
    [14,16,19,22,24],
    [15,18,21,24,26],
    [16,19,22,25,27],
    [18,20,23,26,29],
    [19,22,25,28,30],
    [20,23,26,29,32],
    [22,25,28,30,33],
    [23,26,29,32,35],
    [24,27,30,33,36],
    [26,29,32,35,38],
    [27,30,33,36,39],
    [28,32,35,38,41],
    [30,33,36,39,43],
    [31,34,37,40,44],
    [32,36,38,42,46]
  ],
  'skills': [
    [1,2,4,5,8],
    [2,3,5,6,9],
    [3,4,6,7,10],
    [4,5,7,8,11],
    [5,7,9,10,13],
    [7,8,10,12,15],
    [8,10,12,13,16],
    [9,11,13,15,18],
    [11,13,15,17,20],
    [12,14,16,18,21],
    [13,16,18,20,23],
    [15,17,19,22,25],
    [16,19,21,23,26],
    [17,20,22,25,28],
    [19,22,24,27,30],
    [20,23,25,28,31],
    [21,25,27,30,33],
    [23,26,28,32,35],
    [24,28,30,33,36],
    [25,29,31,35,38],
    [27,31,33,37,40],
    [28,32,34,38,41],
    [29,34,36,40,43],
    [31,35,37,42,45],
    [32,36,38,43,46],
    [33,38,40,45,48]
  ],
  'ac': [
    [0,13,15,16,19],
    [0,13,15,16,19],
    [0,15,17,18,21],
    [0,16,18,19,22],
    [0,18,20,21,24],
    [0,19,21,22,25],
    [0,21,23,24,27],
    [0,22,24,25,28],
    [0,24,26,27,30],
    [0,25,27,28,31],
    [0,27,29,30,33],
    [0,28,30,31,34],
    [0,30,32,33,36],
    [0,31,33,34,37],
    [0,33,35,36,39],
    [0,34,36,37,40],
    [0,36,38,39,42],
    [0,37,39,40,43],
    [0,39,41,42,45],
    [0,40,42,43,46],
    [0,42,44,45,48],
    [0,43,45,46,49],
    [0,45,47,48,51],
    [0,46,48,49,52],
    [0,48,50,51,54]
  ],
  'hp': [
    [11,13,15,17,20],
    [14,16,20,24,26],
    [21,25,30,36,40],
    [31,37,45,53,59],
    [42,48,60,72,78],
    [53,59,75,91,97],
    [67,75,95,115,123],
    [82,90,115,140,148],
    [97,105,135,165,173],
    [112,120,155,190,198],
    [127,135,175,215,223],
    [142,150,195,240,248],
    [157,165,215,265,273],
    [172,180,235,290,298],
    [187,195,255,315,323],
    [202,210,275,340,348],
    [217,225,295,365,373],
    [232,240,315,390,398],
    [247,255,335,415,423],
    [262,270,355,440,448],
    [277,285,375,465,473],
    [295,305,400,495,505],
    [317,329,430,532,544],
    [339,351,460,569,581],
    [367,383,500,617,633]
  ]
}

class SkillEditor extends FormApplication {
  newItems = []

  constructor(actor, options) { super(actor, options) }

  get npc() { return this.object }

  static get defaultOptions() {
    const options = super.defaultOptions

    options.id = 'npc-skills-selector'
    options.classes = ['pf2e', 'npc', 'sheet', 'mm-skills-edit']
    options.title = game.i18n.localize('PF2E.NPC.SkillsEditor.TitleLabel')
    options.template = 'modules/monster-maker/templates/forms/skills.html'

    options.width = 'auto'
    options.height = 'auto'
    //options.height = 700
    options.scrollY = ['.skills-list'] // ???

    return options
  }

  /** Prepare data to be sent to HTML. */
  getData() {
    const skills = {}
    const missingSkills = {}

    for (const skillId of Object.keys(this.npc.data.data.skills)) {
      const skill = this.object.data.data.skills[skillId]

      if (this.isLoreSkill(skillId)) {
        skill.isLore = true
        skills[skillId] = skill
      } else if (skill.visible) {
        skill.label = game.i18n.localize('PF2E.Skill' + skill.name)
        skills[skillId] = skill
      } else missingSkills[skillId] = skill
    }

    return {
      ...super.getData(),
      skills: skills,
      missingSkills: missingSkills,
    }
  }

  scale(table, value_path, scaling) {
    const lvl = this.object.data.data.details.level.value
    const max = table.length -1
    const val = table[Math.max(Math.min(lvl, max), 0)][scaling]

    let parts = value_path.split('.')
    let last = parts.pop()
    let skill = parts.reduce((a, x) => a[x], this.object.data)[last] = val

    this.render(true)

    return false
  }

  /**
   * Subscribe to events from HTML.
   * @param html
   */
  activateListeners(html) {
    super.activateListeners(html)

    html.find('.scaler').on('click', (e) => this.scale(
      tables[$(e.target).data('table')],
      `data.${$(e.target).data('path')}`,
      parseInt($(e.target).data('scaling'))
    ))

    html.find('.delete').on('click', (event) => this.onRemoveSkillClicked(event))
    html.find('.add-lore-button').on('click', (event) => this.onAddLoreSkillClicked(event))
    html.find('.item-edit').on('click', (event) => this.onEditSkillClicked(event))
    html.find('.add-skill-button').on('click', (event) => this.onAddSkillClicked(event))
  }

  async onAddSkillClicked(eventData) {
    eventData.preventDefault()

    const skillSelector = $(eventData.currentTarget).parents('#skill-selector').find('select')
    const skillId = skillSelector.val()
    const skillName = this.findSkillName(skillId)
    const itemName = skillName.replace(/-/g, ' ').titleCase()
    await this.npc.createEmbeddedDocuments('Item', [{ name: itemName, type: 'lore' }])

    this.render(true)
  }

  async onRemoveSkillClicked(event) {
    event.preventDefault()
    const skillContainer = $(event.currentTarget).parents('.skill')
    const skillId = skillContainer.attr('data-skill')

    const skillItem = this.findSkillItem(skillId ?? '')

    if (skillItem) {
      skillContainer.remove()
      await skillItem.delete()

      this.render(true)
    } else { console.error(`Unable to delete skill, couldn't find skill item.`) }
  }

  async onAddLoreSkillClicked(event) {
    event.preventDefault()

    const loreNameField = $(event.currentTarget).parents('#lore-skill-creator').find('input')
    const loreName = String(loreNameField.val())

    const data = {
      name: loreName,
      type: 'lore',
      label: loreName,
      data: { mod: { value: 0 } }
    }

    await this.npc.createEmbeddedDocuments('Item', [data])
    this.render(true)
  }

  onEditSkillClicked(event) {
    const skillId = $(event.currentTarget).parents('.skill').attr('data-skill')

    const item = this.findSkillItem(skillId ?? '')

    if (!item) {
      throw ErrorPF2e(`Unable to find item for skill ${skillId}. Can't edit the skill.`)
    }

    item.sheet.render(true)
  }

  /**
   * Apply changes to the actor based on the data in the form.
   * @param event
   * @param formData
   */
  async _updateObject(_event, formData) {
    for (const [key, skillData] of Object.entries(formData)) {
      const skillId = key
      const value = parseInt(skillData, 10)

      const skillItem = this.findSkillItem(skillId)
      if (!skillItem) return

      const skillItemValue = skillItem.data.data.mod.value
      const hasToUpdateItem = skillItemValue !== value && value > 0
      if (hasToUpdateItem) {
        await skillItem.update({ [`data.mod.value`]: value })
      }
    }
  }

  isLoreSkill(skillId) {
    return !this.isRegularSkill(skillId)
  }

  /**
   * Checks if a skill is a regular skill or not.
   * @param skillId ID of the skill to check.
   */
  isRegularSkill(skillId) {
    return [ 
      'acr',
      'arc',
      'ath',
      'cra',
      'dec',
      'dip',
      'itm',
      'med',
      'nat',
      'occ',
      'prf',
      'rel',
      'soc',
      'ste',
      'sur',
      'thi'
    ].includes(skillId)
  }

  /**
   * Converts from the 3-letter ID to the full, lower-letter name.
   * @param skillId ID of the skill.
   */
  findSkillName(skillId) {
    return this.object.data.data.skills[skillId].expanded
  }

  /**
   * Finds the skill item related to the skill provided.
   * Each skill in the characters has an item in the items collection
   * defining the skill. They are of 'lore' type, even for non-lore skills.
   * @param skillId ID of the skill to search for.
   */
  findSkillItem(skillId) {
    const skill = this.npc.data.data.skills[skillId]

    if (skill === undefined) {
      console.error(`No skill found with skill id ${skillId}`)
      return null
    }

    if (skill.itemID === undefined) {
      console.error(`Skill has no itemID defined.`)
      return null
    }

    return this.npc.itemTypes.lore.find((item) => item.id === skill.itemID) ?? null
  }
}

Hooks.once('init', async () => {
  // TODO: put in default options
  loadTemplates([
    'modules/monster-maker/templates/sheet.html',
    'modules/monster-maker/templates/partials/main.html',
    'modules/monster-maker/templates/partials/sidebar.html'
  ])

  Handlebars.registerHelper("scaler", function(data, table, path) {
    const tbl = tables[table][data.data.details.level.value]
    // get value by path (ex: abilities.str.mod)
    let real_val = path.split('.').reduce((a, x) => a[x], data.data)

    const scale = ['terrible', 'low', 'moderate', 'high', 'extreme']
    return new Handlebars.SafeString([...scale.keys()].reduce((a, x) => a + `
      <button class="scaler ${tbl.indexOf(real_val) == x ? 'scaler-active' : ''}"
              data-table="${table}" data-scaling="${x}" data-path="${path}">
              ${scale[x]}
      </button>`
    , ''))
  })

  Handlebars.registerHelper("fmt", function(fmt, ...args) {
    return fmt.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined' ? args[number] : match
    })
  })

  Handlebars.registerHelper("collapsible", function(data, id, title, opt) {
    const collapsed = id in (data.collapsed || {}) ? data.collapsed[id] : false
    return new Handlebars.SafeString(`
      <div id="${id}" class="section-container">
        <button type="button" class="mm-collapsible ${collapsed ? '' : 'active'}">${title}</button>
        <div class="mm-section" style="display: ${collapsed ? 'none' : 'block'}">
          ${opt.fn(this)}
        </div> 
      </div>
    `);
  });
})

Hooks.once('pf2e.systemReady', async () => {
  const NPCSheetPF2e = CONFIG.Actor.sheetClasses.npc['pf2e.NPCSheetPF2e'].cls
  class MonsterMakerSheet extends NPCSheetPF2e {
    get template() {
      if (this.isLootSheet) return 'systems/pf2e/templates/actors/npc/loot-sheet.html'
      return 'modules/monster-maker/templates/sheet.html'
    }

    scale(table, value_path, scaling) {
      const lvl = this.actor.data.data.details.level.value
      const max = table.length -1
      const val = table[Math.max(Math.min(lvl, max), 0)][scaling]

      this.actor.update({[value_path]: val})
    }

    collapse(e) {
      const data = this.actor.data.data
      const id = e.target.parentElement.id
      // iscollapsed
      const state = id in (data.collapsed || {}) ? data.collapsed[id] : false
      this.actor.update({[`data.collapsed.${id}`]: !state})
    }

    activateListeners(html) {
      super.activateListeners(html)

      html.find('.mm-collapsible').on('click', (e) => this.collapse(e))

      if (!this.options.editable) return
      //html.find('.skills-edit').on('click', (event) => this.onSkillsEditClicked(event))
      // the arrow function is important to bind `this`
      html.find('.scaler').on('click', (e) => this.scale(
        tables[$(e.target).data('table')],
        `data.${$(e.target).data('path')}`,
        parseInt($(e.target).data('scaling'))
      ))
    }

    onSkillsEditClicked(event) {
      event.preventDefault()
      const options = {}
      const skillsEditor = new SkillEditor(this.actor, options)

      skillsEditor.render(true)
    }
  }

  Actors.registerSheet('pf2e', MonsterMakerSheet, {
    types: ['npc'],
    label: 'monstermaker',
    makeDefault: false
  })
})
