# Evaluation Cases

## Representative Cases (Working)

1. Question: What is AI?
Expected: Definition of Artificial Intelligence
Result: PASS

2. Question: What is machine learning?
Expected: Definition of ML
Result: PASS

3. Question: Define deep learning
Expected: Explanation of deep learning
Result: PASS

4. Question: What are neural networks?
Expected: Explanation of neural networks
Result: PASS

5. Question: What is data science?
Expected: Definition of data science
Result: PASS


## Failure Cases

6. Question: Explain artificial intelligence
Expected: Same as "What is AI?"
Result: FAIL (keyword mismatch)

7. Question: What is blockchain?
Expected: Not supported
Result: FAIL (no relevant data)


## Baseline Comparison

Baseline: Return full notes.txt without filtering  
Result: Not useful, too much irrelevant data  

Improved System: Keyword-based matching  
Result: More relevant and precise answers