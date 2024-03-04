import 'dart:io';

class Stack<T> {
  List<T> _data = [];

  void push(T x) {
    _data.add(x);
  }

  T pop() {
    if (empty())
      return -1 as T;
    else
      return _data.removeAt(_data.length - 1);
  }

  int size() {
    return _data.length;
  }

  bool empty() {
    return size() == 0;
  }

  T top() {
    if (empty())
      return -1 as T;
    else
      return _data[_data.length - 1];
  }
}

void main() {
  String? cmdLengthStr = stdin.readLineSync();
  if (cmdLengthStr == null) {
    return;
  }

  int cmdLength = int.parse(cmdLengthStr);

  Stack<int> _stack = new Stack();

  for (int i = 0; i < cmdLength; i++) {
    String? cmdLine = stdin.readLineSync();

    if (cmdLine != null) {
      String cmd;

      List<String> cmdLineSplit = cmdLine.split(' ');
      cmd = cmdLineSplit[0];

      if (cmd == 'push') {
        _stack.push((int.parse(cmdLineSplit[1])));
      } else if (cmd == 'pop') {
        print(_stack.pop());
      } else if (cmd == 'size') {
        print(_stack.size());
      } else if (cmd == 'empty') {
        print(_stack.empty() ? 1 : 0);
      } else if (cmd == 'top') {
        print(_stack.top());
      }
    }
  }

  stdout.writeln('');
}
