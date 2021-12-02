import nltk
from nltk.stem.wordnet import WordNetLemmatizer

Lem = WordNetLemmatizer()

phrase = 'cobblers ants women boys needs finds binaries hobbies busses wolves girl news bad bads'

words = phrase.split()
for word in words :
  lemword = Lem.lemmatize(word)
  print(lemword)
