package {
  import org.windmill.TestCase;
  public class TestFoo extends TestCase {
    public var order:Array = ['testAsdf', 'testAssertEqualsString', 'testAssertEqualsNumber'];
    
    public function setup():void {
    }
    public function testAsdf():void {
      asserts.assertDisplayObject({id: 'mainPane'});
    }
    public function testAssertEqualsString():void {
      var foo:String = 'foo';
      asserts.assertEquals('foo', foo);
    }
    public function testAssertEqualsNumber():void {
      var num:int = 2111;
      asserts.assertEquals(2112, num);
    }
    public function teardown():void {
    }
  }
}
