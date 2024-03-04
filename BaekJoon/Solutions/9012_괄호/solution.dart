import 'dart:io';

void forLoop(int limit, Function(int index) fn) {
  for (int i = 0; i < limit; i++) {
    fn(i);
  }
}

void main() {
  String? TStr = stdin.readLineSync();

  if (TStr == null) {
    return;
  }

  int T = int.parse(TStr);

  forLoop(T, (index) {
    String? testCase = stdin.readLineSync();
    if (testCase != null) {
      List<String> stack = [];

      forLoop(testCase.length, (index) {
        String parenthesis = testCase[index];
        if (parenthesis == '(') {
          stack.add('(');
        } else {
          if (stack.isNotEmpty && stack.last == '(') {
            stack.removeLast();
          } else {
            stack.add(')');
          }
        }
      });

      print(stack.length == 0 ? 'YES' : 'NO');
    }
  });
}
