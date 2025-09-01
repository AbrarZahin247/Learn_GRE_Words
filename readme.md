# 📚 GRE Vocabulary Learning Web Application

An interactive web application designed to help students learn and master GRE vocabulary words efficiently.


## 🌟 Features

- **Interactive Learning Interface**: Clean and modern design for efficient vocabulary learning
- **Smart Search**: Instantly search through words, meanings, examples, and notes
- **Flexible Display**: Choose to display 10, 20, 25, 50, 100, or all words at once
- **Pagination**: Easy navigation through the vocabulary list
- **Detailed Information**: Each word includes
  - Definition
  - Example sentence
  - Additional usage notes
  - Learning context

## 💻 Technology Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Responsive Design

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/AbrarZahin247/Learn_GRE_Words.git
```

2. Navigate to the project directory:
```bash
cd gre-vocabulary-learner
```

3. Open `index.html` in your web browser.

## 📝 How to Add New Words

To add new vocabulary words, edit the `complete-vocabulary-data.js` file following this format:

```javascript
{
    word: "NewWord",
    meaning: "Definition of the word",
    example: "An example sentence using the word.",
    notes: [
        "Additional note 1",
        "Additional note 2",
        "Usage context",
        "Similar words or antonyms"
    ]
}
```

Add your new word object to the `vocabularyData` array in the file.

## 📋 Data Structure

Each vocabulary entry contains:
```javascript
{
    word: String,          // The vocabulary word
    meaning: String,       // Clear definition
    example: String,       // Usage example
    notes: Array   // Additional information
}
```

## 🔍 Usage Example

The application allows users to:
- Search for specific words
- Filter vocabulary based on search terms
- Navigate through pages of words
- Select different display quantities
- View detailed information for each word

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Add your words to `complete-vocabulary-data.js`
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## ⭐️ Support

Give a ⭐️ if this project helped you in your GRE preparation!

## 🔗 Links

- Project homepage: [Your GitHub Repository URL]
- Issue tracker: [Your Issues URL]
- GRE Resources: [Add relevant links]

---
Made with ❤️ for GRE aspirants
