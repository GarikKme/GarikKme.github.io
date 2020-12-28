const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Ольга",
            "id_3": "Иванна",
            "id_4": "Анна",
            "id_5": "Дарья",
            "id_6": "Марья",
            "id_7": "Марина",
            "id_8": "Елена",
            "id_9": "Евгения",
            "id_10": "Антонина"
        }
    }`,
    monthJson: `{
        "count": 12,
        "list": {     
            "id_1": "Январь",
            "id_2": "Февраль",
            "id_3": "Март",
            "id_4": "Апрель",
            "id_5": "Май",
            "id_6": "Июнь",
            "id_7": "Июль",
            "id_8": "Август",
            "id_9": "Сентябрь",
            "id_10": "Октябрь",
            "id_11": "Ноябрь",
            "id_12": "Декабрь"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator 
        return obj.list[prop];
    },

    randomGender: function () {
        let male = this.randomIntNumber(1, 0);
        male == 1 ? this.male = this.GENDER_MALE : this.male = this.GENDER_FEMALE;
        return this.male;
    },
    randomFirstName: function() {
        return this.randomValue(this.firstNameMaleJson);
    },
    randomFirstNameFemale: function() {
        return this.randomValue(this.firstNameFemaleJson);
    },
     randomSurname: function() {
        return this.randomValue(this.surnameJson);
    },

     randomMonth: function() {
        return this.randomValue(this.monthJson);
    },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.month = this.randomMonth();
        this.person.year = Math.floor(Math.random() * (2020 - 1950 + 1) + 1950)
        if (this.person.gender == this.GENDER_FEMALE) {
            this.person.firstSurname = this.randomSurname() + 'a';
            this.person.firstName = this.randomFirstNameFemale();
        } else {
            this.person.firstName = this.randomFirstName();
            this.person.firstSurname = this.randomSurname();
        }
        
        return this.person;
    }
};
