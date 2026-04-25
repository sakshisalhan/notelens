# Evaluation Cases

## Successful Cases

1. Question: What is AI?
Expected: Definition of Artificial Intelligence
Result: PASS

2. Question: Explain artificial intelligence
Expected: AI definition
Result: PASS (after improvement)

3. Question: What is machine learning?
Expected: ML definition
Result: PASS

---

## Failure Cases

4. Question: What is deep learning?
Expected: Explanation
Result: FAIL (not present in notes)

5. Question: What are neural networks?
Expected: Explanation
Result: FAIL (not present in notes)

---

## Baseline Comparison

Baseline: Return full notes.txt without filtering  
Result: Not useful, too much irrelevant data  
Final System: Returns targeted answer using keyword matching