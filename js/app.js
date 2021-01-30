const SKILL_LEVEL = {
  A: "A",
  B: "B",
  C: "C"
}
const BACK_END_SKILLS = {
  JAVA: "Java",
  PHP: "PHP",
  KOTLIN: "Kotlin",
  SPRING_BOOT: "Spring-boot",
  LARAVEL: "Laravel"
}
const FRONT_END_SKILLS = {
  HTML: "HTML",
  CSS: "CSS",
  JAVASCRIPT: "Javascript",
  JQUERY: "jQuery",
  VUE: "Vue.js",
  NUXT: "Nuxt.js",
  BOOTSTRAP: "bootstrap"
}

const backEndSkills = [
  { skill: BACK_END_SKILLS.JAVA, level: SKILL_LEVEL.A },
  { skill: BACK_END_SKILLS.PHP, level: SKILL_LEVEL.B },
  { skill: BACK_END_SKILLS.KOTLIN, level: SKILL_LEVEL.B },
  { skill: BACK_END_SKILLS.SPRING_BOOT, level: SKILL_LEVEL.B },
  { skill: BACK_END_SKILLS.LARAVEL, level: SKILL_LEVEL.B },
]

const frontEndSkills = [
  { skill: FRONT_END_SKILLS.HTML, level: SKILL_LEVEL.B },
  { skill: FRONT_END_SKILLS.CSS, level: SKILL_LEVEL.B },
  { skill: FRONT_END_SKILLS.JAVASCRIPT, level: SKILL_LEVEL.B },
  { skill: FRONT_END_SKILLS.JQUERY, level: SKILL_LEVEL.B },
  { skill: FRONT_END_SKILLS.VUE, level: SKILL_LEVEL.B },
  { skill: FRONT_END_SKILLS.NUXT, level: SKILL_LEVEL.B },
  { skill: FRONT_END_SKILLS.BOOTSTRAP, level: SKILL_LEVEL.B }
]

const certifications = [
  { name: "基本情報技術者", date: "2001年4月" },
  { name: "SJC-P 5.0", date: "2008年2月" },
  { name: "認定スクラムマスター", date: "2015年11月" },
  { name: "認定スクラムプロダクトオーナー", date: "2019年11月" }
]

Vue.component("card-component", {
  template: "#card-template"
})

var app = new Vue({
  el: '.contents',
  data: {
    message: 'Hello Vue!'
  },
  computed: {
    backEndSkills() {
      return backEndSkills;
    },
    frontEndSkills() {
      return frontEndSkills;
    },
    certifications() {
      return certifications;
    }
  },
  methods: {
    getAge: function() {
      const today = new Date();
      const birthdate = new Date(1984, 2, 8)
      let age = today.getFullYear() - birthdate.getFullYear();
      const birthday = new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate());
      if (today < birthday) {
        age--;
      }
      return age;
    }    
  }
})